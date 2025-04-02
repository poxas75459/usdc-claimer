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
    "2hQqGMAS7BXcpMAJETDyEwueXfTzmYvUztnyQ3GPSmFhC2tmDKWX3yyAkMb2mjgQC6Bb6gJPP54bncAZFSiUDHuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ELZaapH5HLojhmkuPxoeKGziV5DeHFpYRtVpaV39kH9q22sv5YdgC6rPHF7UQpdWfZ1yDnQSW9Cp5sJriFTiTM",
  "key1": "3gBijSccmr7WueRThsertKTCNobmKxTKLW6id1KDm1DFcNXFkmM8iYwf8tksNn2HpSjSjJy14S28hhypYVTA9htB",
  "key2": "2jKbtWo7D7dztLV1gFcxZEEvAhn7yj5SYFHiRZvsHUrzwtKx4c7tmQ3S8eR1KuSUPTRQB4ERMb9Zj71hyo9ZmFA8",
  "key3": "L8CBKmZDk6dnk8qXt9TLZqbR9oNH2qEkUewDLcnvf3U6pnYmBU8Ge6iTbEPT4wsMUfDuCGsamRnuG3FszmBZG7d",
  "key4": "4CpruRug5XcJSEURbep1UHK9ftrzXQ2M3zEZSTsBAQvdZuSTo6niEemrDuhawN9NAcwg82dw5HXwpU9GJoaYqmdr",
  "key5": "5R6YY8b1wCwZeVfm9TYZ8bcueo2KeWy1nc1xZ5xeJxzPXbWYqyjDBH7esQw3HJuE8yKNp1SEbzU46MWnNKfAZze6",
  "key6": "35KiqARVKwrW95EvQF33S9MVotE2KgG4TvWScnstEgqdJvokhAc82aFUUV6eXde4C4nQCAuCE8MV6hZUQwhMmd3c",
  "key7": "2y2EV67kUsBjiDgVjuFdRaC38iW49dmsNtR1Skf8aMCKVL4Wf2CsfHwyodQAkUKUcCfo8GZaSER9CcTdDbW4edjM",
  "key8": "58vuudk1kSTKsjMB39MMxzUyyNkazrg4yfQdNbQnJMxUDfujYhTJndLMs4BXstCcAJRhrNEcoPYb6EejrFz4TWQS",
  "key9": "64gLujeWFJ2CbVNFr3o9N3hSVEfDh4gTpW98MyDsb6R3sLBbqD4hqPyaPo9iGdt1x6Kbb79cUpmGJB5CP4cyrNaT",
  "key10": "2L6VUTCav3UWVbQ8kfH8T8SxNPEM67d5twBcxTQtjmU37orSLHowF4Rq2sSGsP1dBdN31bAF5sJWP1PgSRg8BZVU",
  "key11": "4WCdJWVL62tcwM7QZVpHfzK96Rsgsw3CjPKC5zQWGuaZ84rCP7Kvy6s63tF8bdi3fNFN1x6BNVzYc9RYtfpGTsZa",
  "key12": "3Rw9W9zzaoEHwLv6iUJcruj39oLza9SpVUnVLTzVZXEe9jqJF6kuuv2Xo6cAbvgnBtWnZqZWkK8XZf9qcRrnKH4P",
  "key13": "5uWomuRiB8apmW6du4H2enAKaDMHVytWktSYWneu6wFvL2h3mQ5NHiWkfua83jC4MqPPbzLu6cmE188XVWrLpgcU",
  "key14": "5vZhjQAVHeUs4Fupq9zQ8Zoc1Q8A4ycxKzXeYqSw5cpMLj8uy5sy55kTY969oWd3nTugmuBoQYn7q22NxFLJxyqT",
  "key15": "22Ns6ytSY2iPbML5gh6GSSuQ78t6u5KYFzLAS648LZY7yE5iLxuoH7U4LS8CZLGr5ik167Rn7AsQwhiw5xJP9xaW",
  "key16": "5eqNMyfTVhWxg4bGAC5MGK7g98FQ6FZA5G6D5AazQBNF1ZN3qik3SZpuGMW9e2yjHjz5TQ7c2u8QUmxYuoyWp9YK",
  "key17": "yYew4dj1cPFS7wjmHFzunXmXhesVvBTixa7ARUvVAT2rZUsPDVw3uCU1RQJDYAKXu7QjjCV22UEPLFRQ2cRewyY",
  "key18": "xRQnNTbK1hCWxWC9EHqjsgBaRB4aYTwa5jj9RGMubD6bcRrVs9xpRpB4NaXEm7JQQRMBbsFT6pvB4YksXhRgap1",
  "key19": "5uE6RmXCwEPhdJJrBzfHR6AFB9Noha2GLAt1aYnbJUtQ4CY2j9ohwBXYXh2eta6rwpRymL4hQbqiZRXgmyEEoJc",
  "key20": "2LfdSsic8KeV9EkXpc53dXvuXhXq68VCg4mMfUEMuXEzY7gVAdQ29amM3t9d92Bb5JRCmQrLRGDkVERXuARrtY5L",
  "key21": "AEAepUKJwZLEC47wiXioKxn2Fwz7S5fv3p67axs9EQfjxYXe7tS3AejSymEzFCvwGcBcCq218Rqbz9E6tCUPs5P",
  "key22": "3Kwdo6g5LdMvpnRGALX8pGUw6wPKzYAfKyFNRoCPvvMWurR2kLiSLbdeUUpfmRK4shQa9FbXYj4jgshG42XnPTzo",
  "key23": "3zeFDR9jLmhFHphvkdtADQN4MkTLbC9NrPQnf2oUeT3YhVfVuzK4xQYYGJ7FANvyQSdYVTwW3wiDN23ZTjYYRppP",
  "key24": "23iTUzsQxFo5h4GbtyMcpnPiaLbt8J5cQCcdfuQUuNAWLHJhc4kXXTmgFo7Lhy8CPMF7Z9kPKUBZwZ67BkDQJY6r",
  "key25": "5pj93straSUT4wGwRss1P2KCdfd3HfvjV5vWzUHBoDMnHxBvFRv445i2NXWBonnhRr7F28sk6fCUbpySU5Nd2htS",
  "key26": "LUcKvditU6B3Y454uApvHPw1nK3rEJqQSm6BsNjC4uTZXRGFjegrtM8GmYbgPaV5xoiGmyMcj25Urd8zr1av97f"
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
