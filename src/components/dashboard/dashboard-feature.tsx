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
    "36rBNdGwBcnpmX1Ez1JU8yRJTFUNRkDBMSxoPX6CUTGt7CG6UPyWgM8bqF98ReLA3tLEF2KjxAJw1o6DVXgXcLwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MYeGhPXRfydQQ1aCzToCiRzVotF99oJYC9Cr3g7sXL9ZaEyBpEfPj4AyEYKpy26FUR6mMfw2RuyMvV6ypRrcrc4",
  "key1": "4SgR1rAgwWpsgLYg6529K3vo2e1RYEvf23wtTw77jFkR7XiBXgW1zZg17JukyL5c5e4jKsJy1z3TdGEZJk7M6QcN",
  "key2": "5vBV1bpRkvSkkyG3nRh1FDx4MJfdtQqd1auwqi4Vm61WCmX35Fj9jyGxxa8s4qPcboHE9BsT9RnibR8YjpeVQZzG",
  "key3": "5AFkcWaAirUR71Bzwkdwcn8hJ7XSRBs9cVnU4eVQzzobJinqZnRXbe7VhaRNGWqQefuy6heP97PkZBPNt8rGqRVm",
  "key4": "YDVCps1746eoHFhUjGvNpHHwbHbaXf9qKxmHKcWCdDnpfb5mWiaLmSbFd3iiSkiva9ooQWYzghDUQTEcfMgt9pF",
  "key5": "kkYEKTFPEkHbR2mcNDxBR7WXyTEyqeuR2abMthHwAWdnm7nrHe8x3cZjwoLPu1FHCmNVDf858hBKEXd2GdzA4Ww",
  "key6": "4xRd52UmA5zY1ZjCCyx3wsdWMNfRPU8mdMq2bXfh5sqYnJpqoxsZPvb3WCzqYKbC1Mt4r8MkECFRH2UvsBX9qZmv",
  "key7": "46X6SMdhyXm2xdPUotyiyD8xrFpXU8GKwDhswU1qBYKfTtVmPY7iQB4HM5HbJqtYrkEcBtS5CFNE9hfJkw9hS6Vv",
  "key8": "4HsikbqyeaeZ8Zi8XgTS5WuoBbnbHNVJH5x7Brf9mPUDYkBb72Cr2zpew9DZrDp7obLsSKJBMV8o1zJqwmCKiRgz",
  "key9": "KpRDUiV22XpT3wntVYTcKDd6LUCXLd3tvBLZv2LdtKDi9HW2m7fg9LZZeoGeyoSkmBbEMszhFHKsMFnNzhuyeHe",
  "key10": "3o8oBGQAW79QDLZeZtYQQoWMk1FHb5Wemd96MskKM8ncAx4yVhUWkGvEjvVSRWVkZnJqAeHLuZiGUqxTWW73uQWp",
  "key11": "ju5KcvDDCZfF7RPBWgcFfi1i34GQJSAc98ko24EawfpsxZMN4fZNcp7XJyuc6u3M9jjeZSqmTEzqBSCeq3NC5oB",
  "key12": "3URAXXBC7vCb8hwrCNDA9C8kxLRqRq6xXJs5ew63B9qJ2JzswJ2TRwgdukBub7we8Ums5pjWRcQnYvutkvZkMAoz",
  "key13": "3snGjT3HDrAkmk5c2Akc9fuPNiZ1g9ej1Bstb5MYzy1ukG11QnSMvYyhQGUXxLC8f33YriT2oxuvAEDv2tvXfXTq",
  "key14": "dQnaecrDGMPxCiiY7AuJ49hehR2zUF8PfLfzGdAgnyZc72cacRXvxed31RnT7Xf11eEnashfxqrhvMXR9L7Rm25",
  "key15": "61foj2bhttbbtyr4YHsQtjNaGzifBL3UEJ4GJArBfxqBm7dGGDEKWTaH1kM3hsVcpXwMGSk16eXxYazQPc7x4SrN",
  "key16": "5MnXr164czJ78pf84ZqgTWh6zZV89AVEjUch4YuNWtEqVWQ11xebW2sc67Mi8yCtD3sWyES7gD5frrzL3S8vi9WZ",
  "key17": "4TAbamDPc3vowwK5juJNkh3UG2iQiJaq3xH8QfBNCfhStMUz3r6t7v1b2iM54mRncaWeDhkgKAopwBPNwcvF5mKh",
  "key18": "xuXx7MD67C3QfDffRiLTotrkgcHMaeX7n4KnVKyYyZBRctfbPUiwue6xW8iFEYpf8jYRK7TPQh2Z2rYf9R83xcD",
  "key19": "3n418ws57m3NJ6cWVjNpg8DszAcc39STYGUjSZbvAcYVJ2Q1ABABYxnsfuZUeyAwxuH6JZwDmRREJvynPAPij4pt",
  "key20": "2ZyQiHEJG1LDqywhxifP8Utx7Z364WmPmL8Ah9vX1EQZ947jVJZ6exbxAUioGWi15CeS1gBsJRZh6jqfUJ6ywKzS",
  "key21": "5tzRBeXfhvFkw2xBgUEVDqpynqnL32swZnW5CfGBqCTWdaspyxqS1TysZhSdGx4gmqgEpp9gUVao4KSoci6g8MC8",
  "key22": "4SxP57z4xDhBC5vnWDkEcZtDVeuFCTbUmRyGTcURuVkBKwBw2ewGc38CCYZTtuQbMeDXcxR62vmTci4dvh6ZcfPx",
  "key23": "2VhrGdHJeUDL22CaVsMAiUdVLZKVQtMEDSyt5ZgfBXfmiR36MQmCsEKPzhCEhcnnnBtVCNH8NUxJ2LZTQmbL3Yok",
  "key24": "3WJBtjxnuxRuUzi1so8yf5EuDy4aWMyVyJwDq1R3z3WZgnn8CVh4fZ87q4KjV3YyNUic3iVVzKqzEGm9WTMG8QU5",
  "key25": "3WkEA16hLx3TQUKAVyVBUBYktmo9z1E64Wwd5CPQX2uHx3YLiTgacUKyqQRhzjKcn5Udh1rdT5sx6zMvybfux7Lr",
  "key26": "4DPiua5byrhWQLGBNGzWaCtNHqHSW7VKnyeGy1pAgYY7mY6yXoy1WWkK7RE343YFtV9NNT5HcJcpZW8QT5uh7rUk",
  "key27": "4teFfFnDnwvxH7sMTkSAufWAoGmvUBGJbyUZj2x5xWfGFgyZhwm16gmob86RQHdNfvtjAdFZ3eLQ2eip9JFanQnY",
  "key28": "3UBZJ2wQxfb9oCKTZ2Kw4tWPsjNSbAALVAh9ipjirW89uHnNoXs69BwkRtnvfdyk61cJY4yWuYmVfJcqdo78AbrH",
  "key29": "5RG9N9bUPwe5dr5fJYr5WKUXo3Pxctj5GXfeczUe9S948jMN6DmifTcvCTmPcHAaSm2zonKCww4XLsAa8Ss3XZad",
  "key30": "sTQPSbkozeMuHfKP19dAPQ8uxCNQJn7qvqE1V59MghFHDeg8cxhbznb1NfVYx4Lp7HpntyRimsSHdvqmdtVwome"
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
