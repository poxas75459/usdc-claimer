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
    "5oWBNrFYbBz4aKoXwZJ84g2zYnRcYG9ViLKS46Uguod7Jywd3im6oE7h1zVKKnbvfhYRzKuGXhVWzPqdbt65ynw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJb66oa4SeQQJfcGNueTUszsjSmCzHY2HMy4r516WJ4hVDszHak6wof9BMQ3JZUib3avMacoeZrXWaYF7DEcgvw",
  "key1": "3QxmsEfqmFKdf14seTFYSZpCqeXsSNRWEsM3EnzgPukJzHPnSaVtCfFtj81q28uXYbjPEV793SMWtFTNAiSKbmjx",
  "key2": "4x3zuNjJUv5pnHwwkJH9eLLUjvxKhsUG6DkzXcRZbjnQxQx3Cz9W88vmG5xSeDQvReXmuNkj6MtAeyvhWTwbqdtf",
  "key3": "3pDRR6ijyU5JW7XJdTJG46yGrbPQsBTEvNhBXW73nSExR9BKUK7SmcLSLvWrJqhBGsDUZ4bL4FvTci37xDAyiA9T",
  "key4": "3QJ4yQ98AYceuAwhTFgE1QKFVMNGNKZjEg2Yj6cTFLNK9WUJZ6vJ4d9nb65f2Nhds3BkFMXVAC3zMYqoZK5d1AD3",
  "key5": "3nGoGkqnhrQeVDwiXcfzsVLPAkGdcTCDrRStVbFBxJLAMxtjdo5pzXjARcg6asE3nAuLHRD9vQDTH9aRnDeQ81qf",
  "key6": "432BcQYiCj97GmBfHmSsV4r18wzAtJkRP2885JmqBRWBywq469jYrYD6cJtzwXfhzfSbAiaiP6bSZ8ErPmPEwZj",
  "key7": "4CMspV3WRzsTiUW7gT2yyPDVhZicJfCwKt45iSLrAGhXMaeeUBPBjeoQaJjk4bJX389oRLuNic558iAoJaf8HUT4",
  "key8": "kX6FmdKE7JNvUC6r4SMoAhDwVjiJ829FxHofJruNpZJMhik4vnuQVzJsBLypeW3imKSARcWyTm323cEqED4aPHo",
  "key9": "95BBugidHD4Pg6Vg24GeFdDfZ8zimmfz9UxDMg4ynb2dx8RYCcyvSF8iE4JA6tH3G6EQF1UMuneJJugCLPZ4bUK",
  "key10": "H3AZpkuSP9MVnRa1PESZszEcWcEMGuoj9kHUZyq9yXJqRoQnRTV51JZwiFrZx7FLzFx96HNa7v53jMYBd78KK9Q",
  "key11": "4csv4jXdrCVXyBfXe9KoAjmsveCewoqPNuGZj3u1pLRDRwcBTKCJiJVPwWATFk3CdwRS52AFXE6tQ83GqFvviz58",
  "key12": "4vefjsjYETW24D9mj7VwNPdd6wRcECRf4z995JR66gnyNTYkdSXEUeikbp1xhmPVXXC45dM3hZbBY9uAzpx4RwB2",
  "key13": "2jnRneSqxHTY2ba3SmLRms5yF1JuEKs265y1G5L236xrFaXrXqHjBMZAT1Gb4aEbky5U8aCKKmAfymS1HsD794sy",
  "key14": "3xsFB1HBmSVeYRnFNMBXASkJM9mxe3RQckb5sXRED3eAS1vBA6wM9HMbRzuegoHGRXwCpZ1nWR24k5qtFKHqaxQq",
  "key15": "K3T9MpVyziwqKUi9yFzGHTHbi4gGPKRekoCadTh7fwo5UfK3LoUGSfA4okEwxRDRCYQxgwcJzELMxG7t5ifQeuP",
  "key16": "7EfavZk16D26RXJP99ChXProucyjdK1tk4ad9G42rW5hpN7tNDvqx7nEJNk4LArSGJpLGpa5w8tSXu8Zk9siUeB",
  "key17": "9kXUsfAJpXpdnrDvWdzkuuhuPdxf8antwpVxPowE8wFNDTT2sU6durdTz18iB4p6KiHngc9VndH2mME9uv5ezW8",
  "key18": "2tVdqB7ApZCUJdJiLyTvB44sZo5YXoBiGvycvqVXpi9neR1tnMp67TKh3v89KWZHXFgh93MVMDXSQsUXPcCftb8i",
  "key19": "4p1K9RhCxwYHTkunYcZbEQdpNR24PhsPV8Pa7qMdKcJoL7XBxThHbUZkcKDTiSLAQu8LWUoCKDuwcMo7oAar3hmC",
  "key20": "izbEKj4ARSPJj13wPemVbnfyb1xGTUypYVot44hCQTF3wqKbemZNjnVtSe9aERNkmUYRBJjGNEQvki4tvMEAVw9",
  "key21": "4pSFTRXQPD8JNervSXXK9F8SbuyTV4XDGMU4219edKnCiDXU54y7dwi6awuKEUtAxw8HYUv6Gk7CBMfFwQLbb7u7",
  "key22": "2UVhk4uxUAymaFDtH1ziyYXKCkFCmhBac6vu3ezpoZ9HzD83UgiHJ4JviHbj7iiTc2AUw8MsrSEK1Gs5CdeuTs9o",
  "key23": "3D4puEh41wdYYGuZxqYrM2a9WYreK3D1GSgtexuRzFqmc29M2ZHc7f96683kaZwQPcAQnv3ZK9v6MWPGiJW6fuXc",
  "key24": "5EspAmeiWhsE1kecxmwvYz16i3ctAcG1H5T1uNLA9hfHgfwL3RAbV1k7tcMQfg6K4WvqLGXYN9FTtMbDUybwKCkL",
  "key25": "3cTRuPo6Z2jq4KdxH7n8SQyavBWPHNBqR2w8ZPB2pHVDdiaRtcDGiSVNGvmRQeze8SHjCqvhoivhKxzEGafccQB3",
  "key26": "AePfvY7MkKmqFjZVo7NubVBybQ1SKH8rzGMU4dzamtwtHvE7KNk4XnEm2S8ZmaHK6wmzYhToeiVpVTFb3i7iHCv",
  "key27": "1ZHWEJvhst8xJHTjrja89VC8cEkUQF5VUht4fcrt3Ns9TRL2qkxPiwBBAJqWgY5JgMb5jax3PurCq5DCNkBQc3D",
  "key28": "REPET1Bb9p4vyx75YMB1tVopjhMfybFG8XHJy1g1pA3zyJyB6jtykZMqUKzoK4zbU2HrJCEozzQVdjBpEbR1G8P",
  "key29": "4nAMFt6Uj6urUCbdcserb8i3q4zS5pLa9ALQX1yJkbuKZbaQ9Y3MQXd4PAj7ekiiE4y3Syhnmgo2vcQdnPKjzzup",
  "key30": "RUTFj6Dgpxvc7wGjq4Amh7SN2sJz3a7dhkM6CQU7JstQmnc2pPpzDCSFBXLN9mSFRxeiduvV3nKt8vpXAcLTRc6",
  "key31": "4rsj5BxSxx2Gstgwn3XXHGtVLqcmmRecjxcEKZ5buCzfDn9cdCmtLV1R18JEte1fspRmvU5dVafqhehNNiSLCT1T",
  "key32": "5QoYg58Yqsm4UfhxQoPfTZ6FreQFABqG6ucm1G5WFMvKaFNqY2asUDQrtzSUvzMqK1s1sB4gStBhNj5URSDHihBm",
  "key33": "LnAGP2CQjioJ4zXY7yWPKJJQz78SsrQv8pqXekUjrLJnCXBvX3Mfg1HJ2p9cB73bv69tweSeiqn5pqXzEZ5HwiB",
  "key34": "5JbLpSRpvas9L4uh7w7cVVU4uheZFyg54Kfii65LEoRgRVa7PnuXRK1TyM7uMrhJ3gsvZwjGetESNDx5oTqM8M3g",
  "key35": "3FVXKEP8Zcs9QxvRxVcgjUF8S6P3w8VngqF96nmGo1UDmL2u7VHhM243HxVLuSGiywZmxbFXQdstFbQgKxbhzDSJ",
  "key36": "2zvKbRzhHttLyYyeuJGFH4BghGWM1SF8j5HemK9EMGCSBMSpRuHTuY3JVhkXpmL6L9ogYebxvXRxsBVisTytXS78",
  "key37": "NjS31bW4gVuRh8JWWQUUKaBMKuPbLjoym1qxG56Lk4zLF735EaupjZPoZi3uUsjLiubu3VR7rqqLwVyMBf7Nn2e",
  "key38": "3yhhfCPRhJzjPovwguR8tHTWV96YVv6FDQxRn8TMCXwqCD4aWiNjAhKvKTmMKLdStz5tmMk3iBebC6rKAxWrW8kf",
  "key39": "4CQVJ2EEkmSyAq9cLVY9cMGRouMQjygvjYmz5Wq4TNbB7wRjxa1DErCVvLGh3Bwki3McozTYYuYFV1v2LZhEj2G",
  "key40": "5JL3PpLqvvKEpuLykxgEVEZTQnEzJjkQ3P5Zm4Wn8uY3oa1T4a4geqxRwFeX7vpBatKGa1NnnBup6vQyURCqhLkN",
  "key41": "MAwisTXjMrqRoaeioLwL8nkGFpJ2eQ7sYBPuXHAxqJi6LoxLnpvtweSCpYfjiEsaBQRBxz6DG6KQXWYnFogj4mh",
  "key42": "cnkkunTrrNkThjTmMA4duUXL6RK2tWnDmbHHYqNUvjiM7duJCF2aPG7HowY4wdugzTA5zfjtN1Ejkm2Ye5wakZA",
  "key43": "RWeyfohaKpD37YvD1R8X8kGtforxvv1juiijPSqymYZezSf88eSLNKwCH19Aw6LFtaYSfnSXcyQVDyty6dZKLvc",
  "key44": "42ELwvHGfQXB1Yned87dJiGB4DYbrAn3FWzMirHzKZMd2rie4U4V5KAEBsH73Wuj6BZ53xGMfvZXLGjp8FTZZG52",
  "key45": "4qiXKc3QqoVhzYbzcZMUJMV47wwayNhvLmDz4hdKHDFavJ2iBFcQTzVTWFJWJKKWEuCogePNtnUmjmd8jmHDzYBP",
  "key46": "2WWHuLFNYcJ7ecbeVibxZd1S87QFxSgizw1Xj4t6W7qKFUB4rTfGGnXCTSBWhdiRJxFMJFxB4tqkuehGrgUkDoB8"
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
