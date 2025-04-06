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
    "4a5C3DRzBcQxqAFnQwAWo61Axsn58xa6m7FCJRZXa3MFCeztjf3h3PNAzVv5oYwKTiEr8v6Cnw4mM1m3YEhZeSez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AjokMm44MpSBGdcXTPKhTCNKrafsbbjEP2hTgwvotSYHmyESd19d68NLqF8mFKz44Nhtt4FpRKoET1dve3qHakk",
  "key1": "1DjuPNHXrxEXMiRPhk313sH2a5ZixssV9jeZxJE4uvbmwRqhHXqEMpvcpTn13Tn1dzPos34ive5MQ278KH1LYnu",
  "key2": "2ZELa9jEBcAJ7oa9jtmA4SCyYKg1BZo4Lp1bb6D2ngBt51FQdfBuhVweUKoDNyBAnXAUx2RTMhiSeGp7Ts6T914Z",
  "key3": "4k2r7RHzfFLrRvGbhvE2dPifnXPuAxyd6mdjmFZU2tLhVJUcEZ7UyKRyWecKPB8GGgz1PM3Atq4mwMKp3oTfbkTU",
  "key4": "3h3LeDyg3rEX3NYH4Xt3PqrBTSCC8zc3iEnUUkkRkAALU7YQ9Gy1mHWmz9BzBphB7MSj7GLdqWbKR87iHgR6bs7x",
  "key5": "3vko86gL7RKqcyCMYmWs6Ahkxvbxj2Ufgw3tzYVL2qoRd8HLbryZYKCWLYVTJTamLKnGzJFvi9dsSvDWhTzbTxXT",
  "key6": "2YdNsdJgRfaDjMcZaWbFY1hWjUjBfEtaNVTL5BgBrjRKUPW7x2nqVSmV76fWv2x995FFbPQs5FY4E2WX62fXCzfG",
  "key7": "4WEyPGhHABFvVUQiXhVA98BRPKAVF9duunyXim4FVov2uqmAxjxZfpkyqK8XG6GuiC9jt7MxAfKQnwaBPZyBfdY",
  "key8": "5u8eEvDLtLGfmt6rWfAf5bhRNKETbNDjosTYRQrHNLu4BFHeQ64KbSKXhoW6Cu8PSmJnHiyEaPuUhs79iNVsfEfQ",
  "key9": "5UUkv5pwvrbVw2wvtNwJ4xn5gE2p7J2mySZ3cif38E2Zg5oMUTY4ixhHqmyTfRcez4UTCPSuN6n9SgMX236FArBo",
  "key10": "2Wt5SjpKgaebdtNzAuDf6KYxeSTNsoTs7L5V5Ffivu3ZE6na3fdSCMDPxx4VWofxSGvv5Eb3Pdyt5Xmvn88heDFY",
  "key11": "GRFcnRoTVqXpQ58gtWoUFMr6swdvNS5fecENLZY1wuiX4ox91PMeZLcg3ZdWN6VdSE6G6gkys3gV1VMp4psw4Gr",
  "key12": "2txbNT8tvoEWYKmojoqF7Vj8RKCS4DVtpHpVibKWbKdjv7WQW5E3pxuHCK5HzdX6hWaNwCukLuzB7YGqbHED5rYE",
  "key13": "5fpKs79nJpdtQLYXp24HXRMPzqEzuTQP4s2wjQgDQBivjdsFZZWDzp4JoKYX4GLsp1Q81DaffQ7iUkUj7CXauTJs",
  "key14": "1baaSbz6tPv58KBKMzEf9heXwUfP7aNLL6uHbDTsdx6U5njPYaadTvirPLJzz86uxv4MfoYQJYX8XquHzPvw3yr",
  "key15": "2JfrEX2Fd2wVhG5wb3JB7hg1LdHrcdKU9FKkwQnho7K9JB3Lzi2RLaUS9J29dZkomKRB5dufE6twV2tT6R3NXzjj",
  "key16": "2RNgY4rHzV3Rp5UELe1WeoSat3LvncE28iQECWoY8HjQi5TYf1wyh6MRCx127SMztkDa7N1bzsu8DZNPBHroRs37",
  "key17": "4oFdqyEF82U8K2ygeDJ2rydfvrV4v4HYuFS8FpcUP1vVGF6JxWp3w5ynmju9cbc3yj4jfg3r7RyqbDAVP9qgjNPy",
  "key18": "29YvvioWqWEbdSSX3AcTCTfWddCtMuQKZ3BpMcm3toPBg2zFbTcAuGgZabrzzzhF3f3hiY6TGTzPSEsR9j4rg3qN",
  "key19": "3Ak9f96SUuNnBvfvKYyARtzKV8RvN7PnynDjK96r2FkmBMFEtd3o4hdT7qVnhPBfuK8GTPbhZedbpLZJ9akCCMFu",
  "key20": "2WcxQY96RmHPv1WQcy5zqPZewnzMnWk5AqxRd8q6qNn91Q4726EF7BSYeMfnSHLCJt9A8jU9FWPiHh9q4w8bdKFU",
  "key21": "C187v6Y42BrtfXpM1hg4vKgXemrBqvrXDSeP6cpupHKybu5Grv4qBwnE1Jx8f2PLDbexTQ71mrG8UYbrA9iyHzV",
  "key22": "JS1QVEP9nBnYbLkCWQHD3p2ALgJUoUs5xXGqepxL6HdHvpinDAuL5d4krUpf5fTP9Ez6iZ4NdrxjAZM94tZUsLr",
  "key23": "5kowYyTcM39SHt7EcgeXcq5ixFm5NxqzQDSQNLoKbPKBWUUsp55PJt7wmSQiCDyVLEo14t73ZMB1gPjgRJmW8Yx4",
  "key24": "243c93G9rQutNiaB2dmGP4hHGbbEEGrw58Lk2VHMjhcmFPZRRcR7wcf85unhLCrDzwSr7nbeXHvJwP4Uxf3b1Thd",
  "key25": "5ePSTL8FDbWuGMnigfPKuQkyzrAqgkjDrxZoiLUzybFQkXUNbAvBnJ9Wp9nrHSpvgJmsnUJcbkyFtHFW6bKyQev1",
  "key26": "2oXjxGbYjFa3BnNS86nZBbkGNBweRnfSZvW1BTnjPCphoDxjwHb5vzHZKYvmZCNBRFxnqZoaP1r2LdUQ1aP9AuWo",
  "key27": "H4zdb8VaZVzVpcsggy715jaNcQVDpjg2YMyoGiJouAkvYvNtnTLbnQmjBPduahJXifuTJMxNtkiZcVg2uVbshv3",
  "key28": "5M64Ucce33u5CTgtFZq1N5poHqYUHmnBWAACcmjycHHD3fgS9FEXan8ahGfZ36tgWCELEXeebGXMsKr7JEhMMNBC"
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
