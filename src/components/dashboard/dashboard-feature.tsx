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
    "sUr8EmtQxKUKLagZbjHf6um2MhwqnpekbJBzqnmNwGiutRwpTmKuR1JYWZfG4LCasfDXLA1i5Qpb3sTvQzd1DKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54PLz2k9sSutXAU1LEbJWQALK5vDtLnkjMaSYovRShzSnrszWudKcFz6mbVesBkKniq1EUx8QWtpoijrgiDaGuSh",
  "key1": "4PqTBX5Sva9FN98xwJj8H1PTQ6hcFNXw7Scf5TsNdaxuguf2CrE5Nmb3MAXjkuYFB8pJhx6tn275AvAEVkbeBYtL",
  "key2": "4NdA8fFuFF6Gyi4eRgkJnwopK9P4pGE6aJ6jEYFpG8aTWrgDnpcitrwFHCyvzdmQBKE6JdtNrrASkiVjV3Fo6GY6",
  "key3": "3iyM2vxY7nKGnwBgmKqp3hQXtJubGfYKc1SiJuW2VVyrAKkZVoQ3BYmArx6oGCixoUuMBseZL5rRzTwCD15HKPsz",
  "key4": "2SSumY98DRp5aETmktiwcc279pZaidX6w5WkiLSGEofNpKPUW3oyoJ1uE2BjoNznTDpBxCc2V8VKBDMRu8M9vjB",
  "key5": "48HaJuUXVocXnSsRcAJNjEQKDFMQbPHVwiSJ2vWboVofSp6YF2o3oBRLugdQAMRRvaTE8zz1Pa441eShdGUnHsd5",
  "key6": "23RdHgadxZEK2qcW77z8EouoBw276j8F6gguzSown3Hz2Vq4WFTEixv6whLnAk3JoAZqKLvXmkiHMM76ZLbLqhLY",
  "key7": "29ptMkUSsbtgRjQMyg9jNfW4BgV8jpCkovDBh5nQ1MwJQ9ZY4n2EK9SEABopCzghrY5DaZk5sY7CvAzTnTnDPMqu",
  "key8": "zsuGgc8ZRVqW5GPjewMCtGhjwYMZ4P8jhhqtxFzq3vvUpzS7EhXJ2XAN2FuQ5k8KvTHZ4Q7na6PhQKETBEwkRRg",
  "key9": "4DD52e73wsMURkihT6vX9zqaTQCJjLcKsS3ZkfYt5yAD9PxpEgnybDAVTQVJuJzmpfqgWMSJ1zQqWmqCrc2iFP6U",
  "key10": "2tXsv5JHB8PY3gzcoctFuWYNhpQhsmRYMz4uTBJ3F2g56FXNcEFduJZMoLjggByNybmHPFLyYHNLXBipiWSREbya",
  "key11": "3uiRrXxBMiAZEmtehzQCPGZ6TAP9eWJE5TLqwHZ4zBx3LdRCGQrtRx9nULU4T8fCrUqWfT14WtEzudj9gNZTaicr",
  "key12": "N94jAsPkUGN1AsYbLUiJuA2KChYnx9kAs9UFqX5iyaozL62mbADnQzSNK64aXUvWddLDopK9XSBLsPRGMo2xWwS",
  "key13": "66NrKuuQZPxKJW4oJZuDBeYGEo41JryneB8nKNVi4T9mcfwpQmkWqJdHEgCQkZZsxTnBRA1bLAaD9YW4ZgS6X9Je",
  "key14": "CUmZSAXzNphjt9HAPd3r3GLrWcWWu7QvWFsWtBxKur3qEbBsMjofx3kWZk5JNgz45DwZiX2o1J2ZJHq6pj3R5n3",
  "key15": "xy9GUNfASPAU4YfQDqhMCkz4EqkHpnU5aiAhTFSowEzimKciMt5dU685SBwGZFcUTWLtwp64P5E9Y9N4VSTFjtH",
  "key16": "VLWeuoNHnoQnxB7TAcWQNs2uNpzH4xVVAVNhqLr734uVpUyf4emkJgvh1w5BAavF4mWLqkDJwHLkZ6eXaVMRqdT",
  "key17": "zzuyeqgrWT3DBoKP67A5p9k7zoBcdrTszSB66bjL7kfhQEPjXx7f54pXuAMFwQLcRrg48mvDxy26gcCjQHzy2FJ",
  "key18": "3cAnb6a8pXk3eceKWPZrBRGMXw4gT3tryz2RGstrcafXfZyZpWW784jjSBjJu216d5m9PRwFyVSfyH1jAQW4ZcU6",
  "key19": "5MPTocq5jJZvyKf915yCnMKWeGbrhagA5rZBZGhxFFf7aXrdygA5dAkLrVtoBZE2GacVvpNDdMWKUZDtPGjMbn94",
  "key20": "455AENQx2EvsdY9un7R5ELgPmvM3udtMQCkgq97uWQBe6SKgrLNJbuvqKbKB2Ryh8NDxZaW3UbHzBf5dC3xJcD7m",
  "key21": "hYuTUXujUcQgJN8bcmHMYcVKqtXmxurXGcE53J9c1hoU8eJQUrGc7ib3bEjvYpjD9QBTmfoWbKPeUmm3xaM1nDo",
  "key22": "3A4n3cXD3UcdoZoXkvSSNYGnTQs5LCyaYworz2njUbK6EgGk2RhCo6XNxyYLksZu5pXLumiCBfzoGpFGCXGCkGNA",
  "key23": "2WbPydHohzpBkCTUDpkPiPUhH3LEgWdATq8Rbp17A9cbLTTYZ7ibnxf6DH5L3cDywS35wBzcQ3Y1vfQyue9SuRSG",
  "key24": "57kxRhThjkRjHW14ffqR6Qzz44hsxZAAxBuZJkNgqbJsE2FnXxbN3SfAyK5j9BMH8YuYiuCR1UiKFh5JNTThGrAq",
  "key25": "3oepWPX1UvJLpEE9Vmm3hvgkcyVyYC84N3WgBkerNEgH7PeiEqp199yJ7r6a5i8qciNfxWZAQZGyCcSGWrmLfSpg",
  "key26": "4y2xibBDTS9C9oK34GSkieASnx4FB1dLCQss4yWniEp6YaSrJU2ECEvjHN4A1W2Q2qeAorTRLU7fQiR7CGdGQD9s",
  "key27": "4ouWfQKANMDNCJojFQuoU89fRnoNRz6RFqXKWsk1QynddGTdAFvb4y8sPs48jcw7qhxaxTdW5H4x3pkWrBPxSNwv",
  "key28": "2PjsMMVNjGde4NdNFu5rVdoQQ9MJesipzNktzyLfVEtLcJnK2Vj2i1QbzzKYMHctdmy6hk17S5B5rdTjT215ZkRm"
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
