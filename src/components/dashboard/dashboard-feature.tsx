/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5yMdQhr9UoyiFGvqHthcpGQBDv2JCHLhStRqHdbS459hM5hWfDmVZR1ZSevBAFacMwkitv8SKiHMmD3oL7gdCtma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n54exKWCymo7cRMXxracZqvnhuPEE2coF5XLsHPWZNWSjV1FXEocVcF5VM2bsT3eJBRpwY4f1gXsCf6V8ugNtXj",
  "key1": "67hRrgs8YCUasmQb1cT7HpaqiRts61XUSDHgdtqwCo6H5vvKTtKiwDTiuzZNhtjcZjTDx6Y8W1nzovy8ojKysQvr",
  "key2": "3czewTo7Trn4VYg3BfNHwkzKzKVVxDrM1w4Fcv8MjocXj8HmVHCmgAJBKTB77kpPXKN42WwhYbJfDaksYgmZx6ko",
  "key3": "2sCQp165ntny1xaz43i3TzsgK4KVWi58zzD7TWdxL1phJv8y98VEtg4VbajnnaYWHCwN6QPgjWkNtdJPUtgUUGeC",
  "key4": "4s9dh4ADejAZabUPZgjQzJcpaXYJkxhnWcwJq3vi1CVvEn3m5Mci9gx4C9qDZ48Z3bJm9Y1isAkvwfkMgQc6nzJn",
  "key5": "2s16C9JtBCvKBHpsfuXeZoxZPRidKqD3vQL8f2x1U4yH7AnKT3hQpY2T5xcBHjRe6FdTk2kGnBVToYzYp5DEvJXj",
  "key6": "3ziW9rrytCiraPqL5eVYkydCA32idiGP9M3f27aS7XLFDoxzVPpCrecQjcHrF9Z5aSiYQqYP86pLPqDUwyVKsGoi",
  "key7": "4qFkCrsoivCm7b5Epfp6cRJJE2uT2ypbpKEYky3z8NmHgrRiF5kLM9QuQ7Fo6xyDW3713tk9hKmDda9kKFqfdujy",
  "key8": "43KPmH4A77HmJuEaMmvT6hHoDqp5ut1zUoNad2EJZiZmBCmWzZCJWSFkvvnDiXFbPKPxSPL15GYv7t9mGYZLJBBo",
  "key9": "5X8mN8syrpuuotrTAZ6bFkKszZSEmT52a39AL5zT4EKfV1HeBNSomKVcQpr9pro5t69FH1Um5vwPrLdzvKoH8rMd",
  "key10": "36y1qaNLCUj5WVqRWDi5FVRrNdcM1yZR3nGtTA9X4NApM13p9rECxTNr8K4cPwPezLqDCphCqRbtvPqKsbg2G56S",
  "key11": "93UCzpQ2gjrAYK4fzEWxFFacX9sNYEUP22DhizNR9k6FFzU655PtxvTa6tFXANU7aubt2ai8PnLSfzbBnZ4juuf",
  "key12": "3VAVSMtSeQ8S7dejJ61As7yDHKaXNNadqnZqkKkJv6g3X8jxFS49LC5Gn2JEGvyhpbiLnVg2PchRraLXWoZSzBuC",
  "key13": "2BzbgbD87h4oKkxyQYFxJnAeqkAz27yDkLEFerJdFX5De1i1VcYWfSqRH9CCNVuj9A19rp9g441eMk89orE9MvqP",
  "key14": "2WTndeb4XgudZmHeW7cpaPU6orBMYV8ebzQUgDWFurHiCUJ37dyLfT9FNvJvuCNxW7MxS6XSRiMDjf6ZJS8QsFU1",
  "key15": "3qCq6GZ8ny9PTMxjpQtwJ6XivUKkFSNjatDeZQ2GuqTkjs2BA5RW3SZDVJaRw9wygPZSvWCaJF6TcbPKmyqgsp5q",
  "key16": "4ffA55oq91ezn1cJN6UNMhWmctsDr4xWWr72KZ2PcfM3Rr8XcVH165BnX84wDH7Y4BDtg8pG2wKPsqRKjFrrJBwN",
  "key17": "VG3aGvLHaorSNvpWP3hYdhqNe3Eo4WRKYVi3yNPeFSr4cEq5T7tmxoGTNg7BQtG9MMkw9EoHFFBkeMMyvi4CzjS",
  "key18": "2ZQm8z4aJQ5tJJLMvFttbXnn24rhX8VmrNxeHm8ekLhHP9khXmcand732U867rvzZwNbJ8pTtbRbU6jWQfnJm9jr",
  "key19": "5s1thdU77LHDvWhpXaQUfcnqGp8w3zegubJkQVgFWGQnXpQqu2znF4eMkYevSoQGMtw7HjAhMhHkoLSB3pYALEgs",
  "key20": "2ndYyhaBjoaFikDLWSDFPiGX9Dw418NcmQzCej19foh1Cjn8ohf6uBTxM1JQAxSMCwEaaEqd7L2CAgTF9npfWvmu",
  "key21": "3tZJpuWSiRi66NphtLQR5vykKF35zb66uEaAqaZ2pVEpxQYSkPCaE4Xg2wXCSSwSzzR5xqq3vp1PScJiBMtjP34i",
  "key22": "3jSJ8GeDSrs6yqgS6b2b2PN9WJf4cZ5BbTPoo4NpHjYjxoGoEKdqYh4K8QK3pKdB6v3hVKzJjg1Drjj839JYbLJ3",
  "key23": "4Dd3a4cedPBRLyDjyyZrcBV1GMGaXY6vmxdWcknQWuiEyBVCUpixgkAzijWyLNjwAUFjufagkWssbMCM6NH9HZad",
  "key24": "5kvF9CPn6A5zAzMgXEkPkzXtKAqJiHvAcWXKQJrYqtF2hFe6ZFhht51fVC6Cwth6X9P4313pJU9xpcKzQRsYiCSj",
  "key25": "5rW3whdvoK1K9urm4i2em6VhEiWzykdsDnx3GMtL7gt5riS6hhaYRSVvMysn7i2h7za2uw38wstN4h3YvSi5YHMa",
  "key26": "2fHM1fyTatpQwNk1aB6UJJbc1yN7wCmyRrkuNCNjy8rgF93fazXx2g7JR3qF88eJCPCuGSNswdiMBQUF29YTcTsj",
  "key27": "5mQdmDannh1BquMD2cyi5Akbr6QmVDGMgNfYpnjGV8p4paUdgCU1pHAiv4zkoadm3BQWp4r3JZAe4NTbu4dEqzs",
  "key28": "dcGpCduc7awuXxkxu5CrYAEqmLTLZQgCoU9cj2R66rsPWsJKNoBSmwvHfHN2vRFW6ec7GWUjSD5dSVPmcdssPg3",
  "key29": "eS88HbU2PAtHof6ZQy7eFaUemdDa6J75Nscr4teyZY3NBKtxkD3qM6xiHDmHAszXSREnf2PHpQA2eSb5ejafchi",
  "key30": "44FDAzakGtC3mKUMNsiAgRuthQMhdvL5BV4mZXtdLGg5itj5VWj9czPFNTxBBBZEV993EhAQVDA2vvD1i3cTnoGj",
  "key31": "2hApVFHSBLx9XGCDE5MAgxxkcN754YeQmPJknPPqFZKxX4CLRT78vpnNQjB6BaL9dbQAYAn9fxrMVYPg631yPBTw",
  "key32": "2EQrNbApjTAfKNVDTVapxJMTthvdqESRFo4Sm1gtQ4GQoKSpENqsgtuWHH8wuNSEknCtDiyBbnXrXCKgvWcuzQe4",
  "key33": "5D1BkCneLxJA5W1VgZUbsWaDWJUDX3dup9uKYisGGZELdXX64x7XrPrLMcaxKzxc53EVYAdFiMssMfbe3j2VftAQ",
  "key34": "5s8n2nvxYG6FwxGT7ud3UJ4Wr4x3mUgUaDLzG7um3c47m4NrnEsCtSiCzDsm3s5yF88dPnBKfk1BKce5GuhnHe9D",
  "key35": "2dc1G1f9KbG6PgXFLeKjNoZxYsyVwg1p8pdSyRa6PjEsmnPnnWpfPjEDzHHqjZ3aqVXvYgMsz45hnd9fYEbm6Y5G",
  "key36": "hbUcxduuNA9xbUx9aR8RnZpzwxUdioVkJzRmYjyp6Ah5Dfv8VdzY7BHEUoDJoLGSRv2bD9co1na41YXJPENCgKv",
  "key37": "1PJxP4V3gPKEGMb2xx3Yrzz1VBJVEPBueLF5NxhtXPfym44MjALvXL5ZC3Av2Zp8YyjszG2CAob4t6d4BFYmLi4",
  "key38": "66f8yd62fr2P2GZmCLxEJxerB7q7EsjE6HMsDp83ccp4DtkEn7uuSEMsdgwEMySjBcczKY2SrPPksAdEqVisqmix",
  "key39": "3FweuUg6Gm4aSkVBjLhRATj9g46zGUhZfDEvsdRvkvkBQKPnucvUxWh4iRDSBiwWU1HwCNedY6WXK3Yp2bkkgnz"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
