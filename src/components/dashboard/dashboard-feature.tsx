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
    "4PLm3ddUisPqQLnZWj1mpsQLAHQ8YjDKLrgVRrEoNSqzQRTJmfzxT7YY7kC9N2UapDuL77u8fVhARFrDnoSF1KyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Z4ptDZ31Z6mSDgHeCFFfD3cmi36nXBqLjBHhrduWdUvNaRFbQTBamSCb1Xdm6uW67v5Paf8zakxVragYg1ivoG",
  "key1": "5Dm2TtR15pd2TfqrxXpsgRiYsRcGj4RRFtXkfs788Yn87rhB16D5mH9GGhGe5pTNCHks1szgKHxT8Rseg67Azavf",
  "key2": "4Cp5mPcobtpgcbRQpZkTM6FjpyLwoc7NMjUJrbk7zQRfoGusruWerb9rgsLWU72QKUCywufPSMjzqMSo9BrKFDBN",
  "key3": "2KgpELSQrxURBMPcsetpHLXqPcJuUcdSBwmv7dqL3i7o3SyEUsbRkXmukSnXZsxKM8yEonpCGQMAPjEAKQyoHPm7",
  "key4": "BYh5b4EZEhfmFjjjZp4nijQy4Li44kiFDeFU4YEYBffivsx2D4tibyUSZ2GoxiznMjzecM8pwRMqVxgGgowU1eT",
  "key5": "24VvAedotBfMwXZNnBSYfUz43Pq83Tq3F8yVKADQjyKucBMkQ7WKw5B7UwMtnEnPiCYmEnJqNdKfPCtWpQWce6fL",
  "key6": "cAezuVAij9RwRfKkk9amopWZKENcoKoLNZ9xdn5qbEUP45SdxrjC2qWygdNSJMLegEfGLnniFmh5zGeAW4NArru",
  "key7": "5bijbpUakQ1ZLWLW7u418QCiCXo3CxBWfugj7ZctCSY4riWfRm1xFGPuzkaViqycDYNrm4CdPoaJe4nS7WFgJtVr",
  "key8": "3QcWnPyyxQ4F7bU6zTNuLvGaN8ZMy43ajBuR3qY7cgNCkj5cHC8iadD7p6qZq5amV8g9AgrpmmCD6N21jY86jpCp",
  "key9": "2YxQdGJMsxeqD4uh5izdwEXBSqDuHfrkvp2HuXvhMRvCRuaz1rotQdXwcLSE92JpkUrA7SoU8VKRgR4sGU96CNk5",
  "key10": "66oic6EMpVkknDL5nriPWjZG4psZ8jKohbuMzoV5iQ5byGgQHmJYCjiyHyJiLGNAP2eVHU8zSwPJ5m41srgzBuW5",
  "key11": "2b2UgXmFsMWSBFx8ogkg7znGVr4Nqx759NxZtURBHExZc73D3SBcb486a547oZpctb4nWqvvmS6ipPBh57E12x6t",
  "key12": "5c59ZBpPGXChsBmjzsz75p8DzL9ZwQfyGDsuMLaivraq73c3ZNgCMiuCkBb6tpYXoLkTbhLYjKMchaowHb9B8C91",
  "key13": "4FMvTQD1jwoTUcG3pMTbqMTeWgbEgzkyEibC77AYzPuruQiBAGaXY6srE8ytRc8j2YCovrCFbZzcDYyFMEeDwGb8",
  "key14": "pH6vpg9byr8DUWZMM2zF7xQYpzmF5LfqgUePBszer2pmi7j4kVpRMSLBnqt75CYLa2fa8KF7U8xDr5jd6qKQgpd",
  "key15": "2GMw76MnGQC6uByGGbfHRs9WYvYFK2WtKsBFD3JW6GmmUbMRiZExmsrg9k55WUCLVEzfmVpYENiGTZ4FincUSS1d",
  "key16": "54okg4ucF8FDwmbBWyaWegyU9LWcFkxF3oPwwuJR4kPjnjL29yfg5mhycqDLxfHvzGs8inCwy1SnKdowxuT6WAkq",
  "key17": "63envw2cxGqfHtrGcSdnH3XHrPq87PahVzUatZjKRyk2QA9RgfhgBxkxEhTP1rB8XbRa9Ak8MdU6azq3LoB7EofQ",
  "key18": "5pohv6DUEdqhxemXKdQw4oEVPLxsWzRdJ6PoW1HdNU1bjtxZVUFJwPcYMonpS7y1xFhqDs8WEJsT9gQqToDxx699",
  "key19": "63KtJUMk3HCVsiUo2eA3adnn4ekkd2QjxgCEKGShop2oqFnFTkecJfRDt7DXhSHdq5rHomHkz2frqr5bcVpnz8WU",
  "key20": "33aWV31eK92zgGyAMDxFHwxrZzREcYwcHnfd69HpAdFafturUSiu7rvuuY4CPcWZZxVoj2ZoZbAHuMpmbURjhon6",
  "key21": "5Bez9ATh8CyoXN5koExRFhr3qzVKS9715G4MsqxnFoNAofmVATaTm282mToPNc9yKDh3Rs85Vq6W64hz83p97b81",
  "key22": "62iGDYAuahS2NBYPuCqfvMSGrPSSxnuhoDLWdGnVULp1eNWzJZFHFckJ6qEufsxGq8NgrRiochRyGSLtQiwYAwfx",
  "key23": "5R5WaitU93qBx9rr9yz1vDpATDhSiwnHc85hYc7pTF3r519HJhKJ1PYmP3ivWmPfCRL3YyHRfFrWixikau7cB4eo",
  "key24": "3RefyYHK8d9zpZrjTkDJn1xYv7AvqK8R1F112PhEFQJiHqwQQoTrUoz7JQd7qbd5zS8CZ8XfGVPLx8waJdFeTKJn",
  "key25": "2BE6V7ZaS5e25BEieYXJHH9aDVfXCa23XzwNKE6Fnd8iK2gqf3wRtdo9DQExEoui36HFTnjrQBaxdhy21GzpzuLF",
  "key26": "5LMzGPHJEpPikN26wzyJzhKEYAvC5nfjSfxNnwpX9P3AuZ5oFVnWhbreHaX8Qt4MzuhzeDt7WJPahYx7hPyyjoQe",
  "key27": "5GnsNRYytHqbXpQD392H1hJ4RcaGspF47GTmuQaxUeDGzgEi9h7d92FKp4AzXwcLvRu4NSH5CmB9KMTbYUDbgXWg",
  "key28": "xD6Qy4nEvYE4DcWgeVqDbXSv5XVLh7a4Sn86A3mPupHAtXZ912TXkEU5YnkZu3d5Eh19cQj2ziXxWnwb7yhG8PK",
  "key29": "5NoUy5KgQKdoK9CivRkDD1gGunWcHJj1XYEX4PUxNoNcEM1MWU4H8xDTgPP5qY3B3TBjdu6oZ7VhRc2ZXXpqUp8u"
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
