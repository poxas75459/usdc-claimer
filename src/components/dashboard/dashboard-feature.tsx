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
    "3ntkAxnB3v4x6Qo4kDJabWf7D3JkmjUF9b8wV8M87tFcQ51Kzm3isWmqGMexirzEZk7vxbzAaHMxGFPRNpmWDpUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PbRsxPWzGQoLDx74nW4TteKdU8m5h6YD3BSWGTTH4iJioWEB1an2txew5PbLDwWP6QFMGkxngSJQrg7LQFFqrGn",
  "key1": "2vrcmeS6iWCaSy13VYup1zu57oBEMbfvXb1EfJqJEs49TyS2BPFJQt2UtafNw7w9tKZwDVWbW7kdX82tFq2ruGgn",
  "key2": "PLTCpGMnDHeHfbAarf34M13PfdHCzoFXVyNrRTLYxGDz6PE1wJxc9AAogNNFfr9VGRTP4DKZCjADnLtvxEy3Ymb",
  "key3": "2D6fLka8hLtmWXQU74xx7XRjum9SBarznAWrVBjJpofukS1ErgZDnb8xYn3mfMSX6oDJUma4tLZx1LBJHPk5aqDH",
  "key4": "5eRJBESNd6E31R6cmdnHYjZyEyhRYbkebby4bys1UmNXnZ9BraoeY5dA94DTYuXLhU3novEu5WgX18tLpjLbezt1",
  "key5": "5G98SQrPYmUhpLUZ6Whc7qtSvRAbmfoqBaXMPRKTd56MTN2kQpQ1j8Q7z6uST2PRRuSxCahS2SaQcEgor4e6kjRS",
  "key6": "3p8RkAdwN174N6LdZehock6NUhXuKeNtj1BdSkY5fkE2CfDXwpKk1CUdRbAqwxqcWiqkmtCEMnveHE8535vxMavD",
  "key7": "3S1wT6Ur4WJQSi44AmRGEYf5K8fvjwixGxXrHQYkiZsp2tBbGCqieaEFCXK4FVukRbPLYmwWW9gNJaoUNaGxzJvg",
  "key8": "w3zDJo6RDk4XqrucHqMtHHKLYs935Lb1jPL8dDUbFofEmofUVnNdmZvhLJ7s1tcHogDbT1T9AFkUGiwJSFhWJ6b",
  "key9": "3tn6oa1XS4umoWcRaepd41jwnV5ALEYuP83GdJhFz5rCgbCVkhUv6b4skqmfKGgiBL3LJdKLWmKbzaZbiE3c7S81",
  "key10": "47UkDaoeRDCfP2xyF1sF8gPdAYQPyyJcKVanc9e3rDGZFov1hy5dVWr5mtPKK6wCTBV4Nt4T3CFdtbYq3VTTmP4e",
  "key11": "2SqoNF3heN4shJHYHdGFyztdLvGUCwijFkjsrxEVFFxX8dcQ15V4BkfzQ93xcMJFYHhpafiU254m9Nj8a6p4P5Nw",
  "key12": "edv9JSzHg9JUXtEFf2R8t9yjetLg3R6hvnGJMyjHbUFzadwvDupi2J9xyAmPRezJpLpFRWsD3n8JKZPe5dxv9Vj",
  "key13": "3eMb9LtTLiWNbY5xPFFnwpTt1RZ4fUCyAAwkvzL7h6nfrcwaoxL7cBHGBRXdZPbhbn8p6W1rXu43kbvuzV3PfAiF",
  "key14": "2Lz2BWRBSvqPGpdAL2QVx2fpYUbBThXgScSdKeo1Amv62EzA4Wtrq4jYuXPc2JpfLqE9dGU96brF1H1JWv5fbZZz",
  "key15": "3yXLsEPdrmGyaKnrnZPXmNAdDAA2N7Hqny8dkB6G3EnnEHiZtR7FeNUjMRovP9WyrMMzfCwccvbreEUn7SsMQ1j2",
  "key16": "2opFrmHb3VrpiKBMx7n5wAqpzj8ywnEjDEazQ6xvituwiYVxWn3fTaYxNgghVQmjWaudmTikNm5LQowbeytkXpyU",
  "key17": "1BWdKMjnJb4qv89AtGJcvi2jxQKeLhoCJgY7PhgdTQuXfd2QFHHky1cWSiMTSmDukAfJNcKXvqTfg5WvnAcdEu8",
  "key18": "39VpRkdkeot7LNdzZHKGdw1Z4fpzDBzMPg6RmxkTj27gqiRtohKaboVkyMtp4hT1iAWTGYZWgADUqmkLBCU3y5ar",
  "key19": "2z3mWvYthXVYNw1fFDhQbQ6NJRyuBaRhYH5yqZ2LKKEaXGEwJZyPci5vHo7tDxnSojHJx9FQe5cgCzFBcHMvfv2o",
  "key20": "5DkrArAqfxXrKCyAGB5eWAFSfzTsNq7nh1Mk5bqJsEs5fYgohrkQ342RYU3SmLrJco6FZdaxE5RBtETQSFhzP2rq",
  "key21": "5FZvtWFADag4dqKh9hLXkB19gSCBwSPwVt4vkK7TvqThaKuG1oH4VZuuiivC7zTXYB7otJ3jeUaStLb6RB5Ltkgi",
  "key22": "31CK8FkR4pCXydPMvPs21kShAbRtE7hfEgwZJBDCVjG8zdvckGhoL9nrKy6XasiKC6aaYXxjmr6brg4sJnRyvwdy",
  "key23": "5u4g2r1CKK7KaJaPLURDcZ65B2gS4xUg27Ea6xkTkvmNgf9J9UzD7B7Ho7yJnNxhinKPzFeKNy4HDK8dcrnrfTPr",
  "key24": "125wNLt7859kB5SUCBx625UEFjkrS5S6C3ny2aN6nsFf9yeyHiYqHB8TbFD6fA8JrebobtYwwkb5FjSGRMiFHAQB",
  "key25": "83s4A84MejEFcZizooozmNN2BLbXQZfBNRMGrPao7BGxMMj3WPfRc9QUFryohZCJxQJmqe7wj1LJkrvfRpa83pa",
  "key26": "2k1Tb9ACovbc8pBPvi1HKfFRjjPewyxWn68NfZwJvVPdYpnMMQv3hStq4mekuQ8Xg9SwsLzTVxzaEma4UNjDBrfF",
  "key27": "2hHVRRoJxg1Ucid9NBUVmYDdRayMJ6WNVVSf95HMrug2hcT6onDZDWhTn3vNNULMzo1aprB1SppEUZqkawYHJqmw",
  "key28": "2CBr8E6Sd6oyT3Ew7qYA4ucHyCY9LQbdkTZPswGAjHkC7faUKAR82FFNvk6nG6sXJz3tJYtPGodJR4CLD9pZFrBK",
  "key29": "5ysWSCpzGNEzC8EtNCPaRjqf77ryFGLSBg5fX4KMTjnpnzNXZZ2qVJDwpRLAbGpZhJcJe4D9cqeAugnJ8fFUvDGe",
  "key30": "f5iUEMSEFGiqAxAU3KS8ig9WHgoNCFgEVNxPxiWsAQTmGKs6nKaRReH9zXvE3DtqdcbsV9LBxxa44o8RsRNsTjb",
  "key31": "5YYAzGout5CViMwD4jpMKw6EhJS2ovwiR1Nyd8K5bLrYm76udqxF61AQJ4Rgpsc7on39KbivqUNqvG5TSVwMjbc",
  "key32": "3dEXeb5dJASiVSch9CxRvy2Vezds4LDS8edVksuXs8kGDKNvw69GNYiKBxje4KoGZFN7CJkM4hqbUckJDnJGijN7",
  "key33": "5gC7Su74gASybA7AdXqgK1Tu1r3HbeyYa9hhBZxELT7kHtzF5cHeu9dqoR3TqMbSxMwYKimgunEpkUGsrgAkN7bq",
  "key34": "2wcJLySJmgdi8vGxLzJofw4BS9jKmcGVoqUXGwjyrYEddCVTZHR7sdBoP9CdBycP8dKp9pz7wRQzx5YaCefJeRGe",
  "key35": "2pRh6HmcoKK4tGCTNHYo7BMoJ5Dw1Czk1gQkm7aWcKWmbXrzz7MQMoTEcYsLLkUs6TU63SKPifssNh5K7jt19k4q",
  "key36": "58Nn4GkLeXS99NYD5HhTMEsVcuCmt3Ud7Zt3o6pvhUafKJdn1NDYzQn6ydgphpe3WsT4tzQ34PzX2dbJTvJ8aY11",
  "key37": "2vNWqypPrExRuPisNNBUB8SkyAH7uZZKztLgXJGWa5rtDnfByjuxN5x97a3DsvMd9nsvVmJ9wF5bKqpvA1xiJ8SF",
  "key38": "5ECZjQx8FBrUn9q4Q4rGZWpYRNFEgdzVPJio4JEENwVobGdVQkUprazTGNTjXxemjxK3EyTyEwpEYooFv2Gwx28z",
  "key39": "2i4EWhxto5oxssUQL2yahAUrRUn3H2m5M7G3nVkBEDcL9yoP7RXBARyJJQiurFz6SPRnHMgPtDV2tew68WUpsasf",
  "key40": "SkRiDM9feM3hMjnvid98UpXwHREvokebDZ5pojGWhUkDHyjsyJjL4yemeZY2bEL3wg3cwSN7Xx4C8ayzfb4va74",
  "key41": "3dCuasnDZe5NEfdLtmHxcXNqYa5KELmGBX8gQJosh9vv7f25o6xekc3FT76YZwWcd2CgrqNknW4Cnaz8ys5JVg1p",
  "key42": "qDZ4xvZp8g7u6KG2FhM4fJAEQGzk65BY7n4KzQHUNkCgP1CabunsCe1xqU78UnEJ1G7a5js3Hxg1rcUtNZFDsa7",
  "key43": "6WdcJVj4vfF1TpU9EN94j2teL3VYoWyS448Nn2PxKUef5QTRv7cq2SCvnVJAEYtni9wNCXuGp1ugAUxqXUokQTh"
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
