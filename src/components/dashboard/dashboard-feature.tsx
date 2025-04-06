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
    "48SJU1ZGAVThEfpGfUSQ7CpYRYUUQx4pTLYHHkBArLzwrDy6MQbnRupv6kLPCenyajVtrpNiEmwtzzmruJXEXTVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HF9p8eNUNjeBsg3SeyXiK5h3uKUecwg3HZSkbuwEypW7WrfcK9oZmbX65aLjPgCPygcgdMqSLGunsZNXQutTXYY",
  "key1": "5yx1Ka1G4EXW4yp9Huf5QpJoJb9ztE9jEfnuaqTvb6driqShNHMBPNz5SiRSb139XwX9c8NH3RQH7gCWEtGEjknj",
  "key2": "4hNkoRaBfSBwFwC1nc75x4gUnegjQ23dN7uq3Zj1gEZTtoUrhQhT92SiNuGV4UFHmU25uDQzEQqZGhHjMkQB9Sso",
  "key3": "2XHgS2noGokTxxZq2f4hYeb5166EMr27xXpx7qK7TKvk7A6XwtcrWnFNcX4rdHtgfnzyWkWqjsugvAR5Fh5VieWE",
  "key4": "4jqX42fLbn9QGzyVhxDRfJLGawma1kw7DgqQfkMLLBBLZsp4a4LmUq4z4BzrBcyMZikudijLAYhUwFTPBnp6kpdb",
  "key5": "QLJUgVMxDrxPDfntwDAS2gnxcrYcLyY6MdBQHPPXhCqwdFjifMm1C9sFT79MXbdb4qPDkG4ZBFqgZPfUjKFPGcp",
  "key6": "3ZFa4VYYGKc3v3YaeJDcNp6btRuVSehSYQxYpGymsWyDivQCaQmMVzUDd1QV98heHRmtmX691gezBLunyKafzLDn",
  "key7": "46uXpT9n47XrpbuF2cRghLdXRuwo3ZwJB1VPo6TXQJSQzcW3ytM2qCDKtsCarnbdGW7zAkVkCqvGbRrUcpxEf4xR",
  "key8": "WJeQ6GTvMcNNrPHTBPRf35P7sjsveMkzJMUGymb6Du5SuPZ56efFqkrRdb7CkSzi9DcWECjdDh1yBTweiRWs8QZ",
  "key9": "4AXYthcosMpGfs4TcfH8ZnvNEckxupksA4KRNQchhiWWMUkCa5zn1cpE3bzDzKrn2RD3ZK4bzmzm1pYKyBfzS1Sp",
  "key10": "4Qni9n3HD6hLxUgLL5xSGfVkLt7YBDtJ6aBeAT4GEri2QHfKRBQzxeRydQSLPUe9geVC1TSwgZYNzEm1kaPM5nbZ",
  "key11": "5zCcSshVxS4ZZfrsUtFcSGJB5SNQpfA2cYGNS6F3GR79Qp2A8MoFjLBoV6d4GqF9zhjCNyy5j1g5yDXAifkvmT5Y",
  "key12": "dCiCgoqcwGbzXJbPJgQPGagrpTsGwwkPtpSaPCF3CyLZswtNUJEDDPAmSjoFuHPF8ehiPmzszMXGHyX7NFMBF36",
  "key13": "3eyZUogweHnSbaJmpspuf3cFq16acUWfLxjnoN6fsJ2rYg5SpUjGiA2VaarbxnF5XxRSJuY5YL9KCbwpg3GEyNo6",
  "key14": "58Aj9Xo6ahWCGxsssUquwD1L9fKiqcvPrsQw4tcoUrE4GtJ1mYyMPjUMkAChD1mtpdDEufXMUFWKejYtYicRVmek",
  "key15": "Dtmk4eqMfdhGK42xQQADHDp5nWkD82TEPZYSVHHSNs6sAnMKgP8kxReKSnhmvGfezyM692zwkHwsXy45n3MX9cG",
  "key16": "5X2kenhWJ1zg9GQzTMBXZuwiwdw2uBUhCNiMVgUXgikySKKDJX6DVSe345nzhSqpzoWiQA8oi8vTfF4SHxcLD2zp",
  "key17": "5aJdgvGCxU2FmT8skqDsqiN2xofB5SywepcV3VYuPAUpTrfaRYpdNfyjrceEbrqYsuhYs83u3FdWzzbGrqN9CwQv",
  "key18": "nu3kX86rAQ3wWLNzZBQ2yk6guiMZhrzmtm5avd5UNFjGRNa87tT46cPW2hVZcN1RXNQPTPgZKExsu6Q5ocgRenY",
  "key19": "5u8a3P5c2ye23tu1a4MJBmcEQML3u26Untifn7x3vSEGWTwxWFHT8d6o5aAtxTGfFcRbRLF7MhRVnvJhrNovgwSw",
  "key20": "66T2TDD1Uwv3s5EgXpvT7EbghboidhhWLteorbiuHunvK6P8m4wKbqXcDx4pbTVY5X5X2SmtEvoAP9VhJJ84iLyc",
  "key21": "5mWvBYFFs88asJXjLhfHQFycbDdReQHVoW7DhE8vdJNT7RHPAg2xGTj1b34e6tEjN8NgvH1mTYiXrr4ixU4mEbQg",
  "key22": "36a8neDgbuKwhXVN4hYpNrZo6zAaqbVFz2WNUp2YquNZgtDYJ4SrAMWEMKkpPF7yd5YTgKuG3dgDh5PMHxRfpous",
  "key23": "57tpe9zwiNFuVB97yYrADE6RNCxk6ybjDUHZEsJtqxSmDsEm5PXrabfhtfjsTeX2Fk5Lo4naRYGcymGSt2t9iH1J",
  "key24": "5zyi41Zr1FZwg81DjEcdDvpjmrD82FXEuxZA1GdMUG4Bh6Ew4cRNZK9srMs4fWPKGS5z8zrDQaRcTAk23aVbJeiB",
  "key25": "f9ySnwkB951YaneNV86LqCzyMxL6eHho7cRafbx31s5vzSdxA5fsJhhvPWnEqbMTe3osYXMy8ChWft4EYAaJXDD",
  "key26": "5XvR3rELAnJBiZVdDLJTYcUQfnT5AqJsZDjexz7af5RXuhT2D7ugVPDxq6yYWYwp5sA1zEgAzxBDruPZkpesPLK5",
  "key27": "4wzykiv59GEC7Rs6CATZRNmhDb5KCuVPjwjywwuMmgJMSPG1zgckSYNrmhssZXG2UpBWRtfdMy7TmBgPhoNNdGG8",
  "key28": "4YHH6urcP5AzLhL3PBeKF61nshZiKbdK4nF1tBmV4LWZUsDWZC3DXDKjpTeGKgrXM5NMjMF2ZKv13u3EmdTt8opr",
  "key29": "473W8PuBe5AZ89q2xgXfHP8nFAxfynGSBkeXLV5QYnwcwBuw7YoJcfn31qcNRhoJSSJxYx1gAEBdm8AYeZy2YyST",
  "key30": "2isuntn9TpWVZLKz4Yo4M18DtGefUqVBZXaQuFDQhBfGc5mPVAZZWickK4MUa6UohTifaohfefYCdkitDzcRguh6",
  "key31": "5SNJ2Hfk3YL3gcrM6KxTtTbWxDsYaPSWedj7Djc1ewT55mbAo8ZjV6mZy5JpacDSV1Wzhsvv13knbPgGcVD7m7PD",
  "key32": "5aPzUbQyvLbCdUgka9wejgoTrFFJArXqJoxsjnawF76kd642BTswnrXEZGEpPRDeP3iSYGaG97pjr3aEXxSykq5j",
  "key33": "3Y1A5ZiPoSEcepVqHpMSVkxTQWzSUcD3zKfcPuBGMSkxQTchfNBUpgCkCGkm27TcUiuwzKyVGafKDKL8N78TFrvN",
  "key34": "2FqupA96hYXsBtnmEkbB1cgrEK8oWXFSDGuPNnhuBauYxQH4osLbM9moLzZ9NRubMsoMjRxc7XXmGPek8iKzjUDY",
  "key35": "4keN6udbcF9LQVv8X52edStyJ36NHyzXnwzF2HY9qv71p3txXWRfvxUkrb6dfv4iDex7BCoJ9Zsz8Eaukaj9VLK4",
  "key36": "mB8SaEvYYo2yGQ4W39RpFdPTZac13J4BfzsjfZySxzoNusmJfrkEyNRFuAouTeuNnssKiChdCedp4v2wLnghX8e",
  "key37": "4Ado7ckDRRPPSJY9KMifcnbbYNDGdUYVHrgv6rPL2nacsNzkjuDD1iGpD1uAu1ZAaoE3RWx8qrG1qs6wX6CaHo8K"
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
