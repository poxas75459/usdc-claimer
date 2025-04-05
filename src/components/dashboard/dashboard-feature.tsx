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
    "2KpFLxCNfjTXrjKQeYKN4hNRERcuQTFQA3S1oMGWmcmkmiu456R5yCWFkQFJT2pe1hFAw3ref6z8EC5bG83o495Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UPhoqTHfUqYVSpWKEwgyZSCePUaiSAptyiZvDSC68d7tzovtcJfixrSkgUDk3SS8aVRfB66uZSmn6JSG8nSbDGM",
  "key1": "nHDVTG9trJ6T9PQJ9G8baFVnoCtRGbZdmDUJxdg3e9K6Z4kPutA15onUxhJYJGDKEQZMxgq1xrPgxZLM2QhBfza",
  "key2": "2pZ6VtEkmYcRiWV48iFG6dwEMkJHkCG8mMqPZDWgnAz88Jd7imEu4Vg7SuZoLg4dBtVgQr9rVfx1e3zUefpEqgAX",
  "key3": "5vWf6BZskfdEEvfaj8QBfuT9S15mAcRNJHuyfaZr2FhtGLr5GtcsYw3v3oPLb64VkrgSUCkvuHb5srkTu5bbSjUw",
  "key4": "2Bubjuk8pBDyngN9zrKq3Jsnsnb6uZGFXDQxniHwXhYCUe7RK3eNgoAUGxwVbvUiGEQBSXDKbZLws7s9a2QpoUzC",
  "key5": "3ucHYD9AeYxDyC6zTiRqMKQ4XNkcBJB8sM9DjuqH6vTGuCD6HV4yxjSSHaRzYRF6rriVuV9RWRbqRHvEPxuWsWWb",
  "key6": "58SsAFaX1ZU78FXLHkjHUWz2RpzkkZZpnPEfEHAdVmA5KJuS4rhQvZHc1VptphRD4K6Drk2GzZ2dWokhDx4hzWf7",
  "key7": "3Ugnk8yZve9XjLExJm2MC1bXk74V4Z6iEVoCCbUNN3dYecAWvbQjLUNJD75MZifDWzijbbbkrMu67BHnJ9BC5hqR",
  "key8": "2XuWYbo2sQPejxuwMXox5pArR1LmFgWbs2pfmqRbQfsycq6KaoQVcTw2DCEWypgAgBEYZxHWDBWL1QrmNWrUvicS",
  "key9": "4FktpsE1j6qvi3jmLNmntUoNguJtjNk6WA8Q8XxdKj1FTyhUkCPDWsEf8LazKQYToRop843D3i5mXLiXggHM71Lv",
  "key10": "3S1sMKFTZMZ3tB6QUSxi5vGAW8EzGAE3aVZYxo94HzKy2nYNPsfidztrWMj5rAxNPejonriHytSWZAdFc6C1HUaV",
  "key11": "5ohUMVeh8GHQRBTZPVtvncMSuCYviFv6tswzzSd6eosxYS7Wk3sV49XZSAJ2BAYsUYqhHoFFabqXHaBc7jpijphn",
  "key12": "5z5yVtPbyX51V6fbGqtiqFr7zojjEKaKhmfyCxPnHyvYC73rLm5UGiCo5UVrccSB6sgpEqYgWrLuh3B6kEae6rDD",
  "key13": "4P9Gwc1LEAmhL7ET65jvo42mCBRWPQ4UavrpZnNS2eg4EGpvXWCN3ezNmvDT9N2v25f8C4DhcKqW8gcwCz4sPpGm",
  "key14": "3pqKG1L154Z41obtabChkp8kyTfdaKAkGmFCDXc2fKabNFgJHqDWWLMATX6akcR9EpVpuPxRFcctjDuPuZydFnt7",
  "key15": "7DRVNWwPkvPMg1ZGroqUu3VuYANp6iWiRnHHBFiEJBysown8ezdHQQtRD3kGpc4k3uzsBWLiDQr4mjCSDsErker",
  "key16": "2XMfpGGQc9xA3GdsuUPb4V6MzjBfwpyYGBgAYWVtTHAUSpjxEvxyH4ufzsW9o4kzLhUQNRki5aTSuK1jfHRqZUEL",
  "key17": "2UV3stRgVXSYjvyonXQw3DrEKRQGb3JrXB3kH6igvnzar1g9CYMH5Q6bCUajQ8sf8HBrj2UPP4vofwbMPwQeusBo",
  "key18": "41YtKmdnx36UAP4crN7oMzupdBTP3xGFCdwJhBDxZcdT5GuXfEsbpekWCtkQczzsDXJdLRNwygZET6cdxhJbLDYW",
  "key19": "3U5n91taLbVcKAXuGdiY3NkkQzA9WRTNpqzoT7qZdyKUNE2wMmp2V7KQBFWfz73t7iLfdz3yEbPfR53xgU7booWF",
  "key20": "4MUnuH6Vv6TJpQ7hDagZzqfPGFY3PQwBxqWMy28GCFoBk27psYFVX614s4rn2d8ULUcvm2EJwrBuJ7eQ8kCyNt6p",
  "key21": "32rs2G2WKFeEf37yQ5qgrwahps8Frd7KC4zCmuUBnJmWW6CqHW2FqiugG8WMi1Qxd2xSxpb5KSQJTuxFSXPH3qMy",
  "key22": "5Ln8HzGzJrkp5aTjy7y8BhtzVF4zi7zGH3n2s3fc2BhLRTbBawoiMzjpzasYHKUQjaLZLkxzmKCgjbABC9S4vMGQ",
  "key23": "3h8Kfzw4xJUXasnTLbNNUUudn9URsgFN31vHpK2yYNELoh8PjHfLseSNTtipNfu6BgzqmLDNcxiVtiAk6pzT9V7k",
  "key24": "5FKUUxZFAvwoNpoEXPssYXkCJrQ2pw2yYRP2SxRyMj1iMx8zeBMjj6nVpBGvRaL9VJq8vy3q9fqsjMH1UgvSjdJ5",
  "key25": "379m2huuxjbNyPurG76a6VKvmjMAVAdJaeuAeQfg1NZQwA6Xm2dRRedJWt279oPdHUGDRkcJXu4QQNp4KafPkbe8",
  "key26": "3FoxzTcksNaHM3tqHpZbX8CNET3kdtszxqzmxJahkeniXhu6uFJqNwCy5PSRhjUm4Gkmp5cW1fhx2GG3vEyvZbZf",
  "key27": "4Z3Zzz2Dbnrcm5XNPGDE6xU7SffnNQUxyLSqRBPLt97ZJyMNT5QUHjHaw7tM6YkifW2vTNJnSBZAkjxVgzSBxxzX",
  "key28": "46Gb12dbhtkzzs26qsc4u6QYboEULiLM47j2vpFZ1SSAHETwCcuFa2MH45ALMrHRpqA6pz5ZFUG26B6EbMJSaoJ2",
  "key29": "2LYwpCypH9mLkc6n79QK2BAp75w95JJhgE9zinFFAU5PGHoNaP1hYFokrHzdrLBoAyUbcczSgNCRRmMAVHqQeief",
  "key30": "4HcDn7EuFps1BLN6TPZJ6jffB9pjWUpbksCmyQGdthNBBAYtw3nUvjQsZRwmbdgTbue8KbsKvtKbR3KyrS4vMA3a",
  "key31": "3yLidgv2NwiBkpLQWGANq3GU8DZJC5nG6hHVhcKPRCmR53hGRFErEYMS1PThWAG5Xi6f89DgF6j2Sdm41rKnUvRS",
  "key32": "3xmtVmEDxkFKcusoirVKBgSkjRy2HLB7odvTrgSHnnkUq4ddY7kfhWC8Q5YXbsznshysJGRfUHPUutJwij9cYfET",
  "key33": "2UdibYuHgKesbNdwpmkDqEx6V2qu1usZ53RY29fgHiotYtJuA3JLYkDubXfdmmXVaxFkdQiq4heTnQ5v39q9NUjw",
  "key34": "5GgszCqR3QjqWCQhd6Y16EKZo1npruf6VbafRHHjArVzNUnJnTzD1FfEpAXjsHJ7LDQbDWvhyuiBtMDai7ctT7AP",
  "key35": "3HnKaKKoiUCuuPiiHGMqj21sxXR2ogbpvpRQLLbcHGrPCA7gJvzWPdZ7Lev77KHWxUz83K3AJ2Drq9CkCp35nBxq",
  "key36": "2xm6T6s36saCtxB8VEQZ74FkN2v2MgWBrzBQLjW6PQJ5HtaR7VcsvaAjL1udLkoB8unBZKemEV2bLx3G4ZsVFG2W",
  "key37": "34RsSeHaM7iw95zUNb3Hmoa5S6GH4z6rEUM3tHy227Ays3he9mPRpmB9f9Qfa1C14UZnprZaiYAyqx4cPFvkx2jA",
  "key38": "5U3wvgU2fFJ5VYiYktj5uLspBm2tBbhLEy9n19JW2LKb8gvKYhehF6e3y12BqHdedEGvb3mTYhfM1uQPsWz4TaqS",
  "key39": "RQmsYrxdJZJp13wnHqvhMNsArTyFYpnakrF3wy1kQ5F5BEmKxqnJj7Ffn3r1NV46J865B1Z5Zdvd2aAjVQGN18E",
  "key40": "65uQqudh9hgfnDmNtVBcswLr4uqw9dxuPGGHo72HCZweJbCZRDdoS2nQwUYBRs3ZqbZdnATnvoMHyjJpCypvK6AD",
  "key41": "3ZaUfiWcSiTajiVzfiuhQLj6z3MMrxFFs8A4QzEFLoftLT3gHkMx5BbkvEHoUsCLebk4NuF4d519BopTUW7Erqzi",
  "key42": "3tP13Q5UssWjj4TBTfPdN7PB4H5Rv5kPNi1XSd9qa639FKe3FV5dpCt9SxweWTHejP9eYebfxmHZDmNEwirYbWZM",
  "key43": "3LTkXsoztjbNQ5CNQgGWMnF5ERnkZC6tnUriGG7x24zPXYVCA6Z4QLdAZqoGpKVfwtAwCHXgbfmP7hQK5PUmfHNL",
  "key44": "5u62J5gNw2pphHPggxvSJthGC6DtDT7ynsC1P12MwshW4vhtA6Ct8NwAGUCEbo9Wq2mFLWWMg2AnUUcQHk2B4DzY"
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
