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
    "4KTY2Ak5QLWqq2QUW6aYXrt8S2yYwcrX678Q2tYA9JaxdkEztGeLjYeQojeAchAQ7atHXcTJXXBnp7NkrBKQqbYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33cyj6KXamWmJHuuUDDLe7fNEAWA3bpCFR9gEncWw2NZh4evCnEeiKDixhNjh9JMu8SmhnU2182gkf53NiVjWBre",
  "key1": "4JthPUoX16ikemUsgMqWGaFMhWZFGbsUGWo8q8LuZFPjP5XSmtUHQfmdxoTCFPBSt5uvH5BdMv8MwuSyZthz4iah",
  "key2": "3J8wjM9MoVYZTfMQopdYfNsbpmbsFSdW4oo6tdgq65nfjpVXkHek3yYJgubXdaLDdUACjBM9eFay5T5DaFrqfH8e",
  "key3": "4LCDaaQX8m6F6t7xuhY95eFXjddqGsLuQZHsgA8t3ByjyG8Ab3jR6kVLU5FbYa55BPvGhJrCe66byJsDSL6nS2Vo",
  "key4": "rdUj5EPcpqQYeEYYCTbpgTUueFjvZCneNnjnWCAsVuZ3SwQYMCM1vFZRwF8SuZ5aiBG4RYHgjKyvkJVV9pPuYNi",
  "key5": "3gXx6EYeK8cUNtg9mt2Met3zLE4GoLAVe3dSMLoGQADT1cSQjYusxJzXdZvU9DmCjv35oScYoKj8abJqPUhSnwDg",
  "key6": "5wRYgqb4igGsJFzXsgxgCiHCbqRp7MZTM5KJyqwNPC2eSBfmquDkpascEe1CKBZ2jr9ttHQbnQ7rDHSospW4UwNr",
  "key7": "2aiJJ889bFLKfCePS3h5P3PUYQMmPLsoA2MtgDhtfn3RrKQBGeuKxXCDdKEqgtqWFh9Uo7EGf22pSuAgatqEkPDA",
  "key8": "r9Rbi4DdWTQ3N9c8ETMfkejCrb4Vx4Hjb5PqZuZ28VhYf8hpkxfQ6wqDqemBA3RujbAEeLDzBLb7VBW2GQj7gFJ",
  "key9": "3ugrmtHsgcwh36TCQhHdwha1ewHwXzwdWxwCgKusPMTm8vWXPKvUYaxME82E7AFGsNYoztcJmKHZqqEeE3CFvzX7",
  "key10": "3JUEgHgsLcdF6VSRiZhiJaBGfcs2StoLWMcr6GoBsMCqrTGpdcVHGDij9L44HLUnX2kQvsbm8HiKf6QBmLprQDvK",
  "key11": "2rXQ2vtigM2SU9eHXyJLx27ogKAMyYhgvLR1FhxMBXWs5vit91RE4nbiSL4F6FqUiijDnGT86hT45Cb9nm6Svuac",
  "key12": "2WgKrVXNaSDFAtrEEbjXNvpShyqUbDffNC5SJufBKAKcZ4hroUvnL5ycAaQKv26gbxowM2N6EuS897HK9bi9qRyR",
  "key13": "3ZoDyorWgL34naUukb1enxXMCMnXb18bLdUhW3FuRubWD417rWgEUrtYKg7623TLsUE77iUPZCCu6Zi1sHazViGh",
  "key14": "5nqXE2iXaKANoPdLUixRArtTTAsL1sJr2uE2KRg2q29ahCKdfMP87rzxYArLEUkR1LXQHW2ZXF6ZGCgZY9sU8Nq",
  "key15": "3uEjBZ6ZWq4abWwcnmXhg2q5u8MoHGQZrXNryeE39rjcAKW99xmijbpm27s12QenDapRxym9aJ9zGZEnqJS93YfK",
  "key16": "3ms7HGpHwiJFKAsKtYx9Mkn1rR2AZjmFtX99G5S6DFqodD3yV58bbxLJTUEsimfSKYg9DEuB9YEsSgnBFLsHSYX4",
  "key17": "5CSwCy3bu2xi95HXtpdmNCKwjk1wNWEvnMzd37TSUybS9UAhiQt8HUzGfmdK14ebzwzjbtudVadTfPUih6vAEUfV",
  "key18": "5P62F3tDrxza2Q4Do3TRbnsfKSNiESySxHqpvh26BcKjLaukvNiHw7Vm1RoJuXbGyJvbxroTRdjxHypzuhUWFiUs",
  "key19": "ou32BaPxc9NPwP7eXvaiXuM7acRjRn5BQV9q7CiGK37EstvP7qNFqDyghufrVjpZidAtJ1LZDCqcnhd3b6AV3gL",
  "key20": "3jJDgVCRZb9CoNfBZLHWMP4XzTew4hTwDh4udCSBd5xkeztBYf29xyMktJqjGsU8aKDEpSnTnK1PisrtRCtqtC2T",
  "key21": "4seveCKK5KCgqs53xyHN2GDP11ncfmgTuH6VKiZQSwnocrFV7ibCvPuwuzLcZUURPwAyzQB4ecQAGP4j3UTrWVyQ",
  "key22": "2GwFQYdmMhEEpmn4uYauZbFvuRZC1wiFrirXcYm5TTcKDzZRwrrp8YYRvsV3Ne5RDSfadecj2HbGvcDy5aWf2kfG",
  "key23": "4VPMYSNmBnDGpLxB6bDPXdwZ51Ff8UVvjMjWUSCTa6VtX5ae1Y1fSFduEi9XB8HsQw6uhKqNJnbqPoQVMTNZuDHp",
  "key24": "4Qf7osQgyBD6SjEqa31ExxFUuHsxhZUwhujzXncgHUa4D3UycP4Z6N5E1kXXh82GMCA6M29CnPnTp59z3QGhRyNt",
  "key25": "2gDEmCe8dNn1Afe8MQFWmb8wND8M12nsuVqa3m6f2QqffGRUXBMhQ96Ce8HuzTfSsDjbXUFSWU86XQRRwaqTbZex"
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
