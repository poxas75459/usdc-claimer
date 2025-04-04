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
    "2EfKbPsvHD7gcyfbGD84THt2DDe3TtmUqJVq49QRg5Y2oZwk1uKSG18PDZfRatLM5gzkokTDRfszdUNUemrEXT9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gVssMgXVS99dKXg17AHRXL9LzrdBrznyEW8HWaD4w54fLyKDpbBBrJvUQ2R9DN4xM9gtWad1mb4Ffk1onmH5vJw",
  "key1": "SRaPeQQFyHEnHgzT8DC1Uawk6kP15pV2URsm7TjWs1ChMnHY8gFFh4uRBZahax16jCgm6CJF4sTgJmnN1QWFEyd",
  "key2": "3mLxSrPhKbEtEcymwCv3SW5YWDv5rPDbToJXcHm1C86thJhnkv9i5QwHFtUDtTTG9xJXbBx9BcWBTE4EdCMFYVCb",
  "key3": "5faxVs4Nf3DrwRaTAWSk4zh1sNCQZxfFSu4M5q6bSKHonEqGc1jur9YhmuDmF1M1KbLp7hkadsDMUm7UUPDqbXny",
  "key4": "4KiDU4QizWhpkYzrFeGDmP2Q2Fu5SW1e6hoP2w8gjxMTi2eMLfo1Sx6B93k6wkwVkuvGkC9QvPhguszQhtwQ79ZR",
  "key5": "3cVPDRVntf9eKpRLq8qnySQP3ag73nZnNdsJVFwYkXsj6zUMBKQXyDTq9eVVvfKKwrnCENLi455i5XnDHJUs5HGC",
  "key6": "2crY1XfBgKuSRBs2sggBT7fHau1Kwi4a7i5bD94FZNdkRikM8wBTNuyudcjeLfNfjLgzbZUdiXeWJeWUuG6BUqXC",
  "key7": "5QzajYiwYTpWHa8BtPg4LpkK4MdYtQZpkcv1St66rURkHNcvfex1kKCaLx6Uasiyx5crrZiUCzy5U8Yd4SUP96xt",
  "key8": "5mQrbxCxcfXxHAABsBskvHxE8tXGANvwgnUbsHCfVLuG1t8JstpTKGXfdgSXPPidegrQDdvUqXCUdskHgs8ujbzW",
  "key9": "4iRTAuXgvkSGrF7NKAKtBL8DVPUPGgpX5YSyd1jMqXAkYsfWCtFNomBZdAzVK7idQQrdb2hHxcuzZszBSok7tT6q",
  "key10": "3k3ct3KR2GRE3GwFck9Az3MgNNJnsC972Ab4X45skMFWGcjRR3uK3P8bdfeBnq5zvvBMQp2tz4pLuvkokQapBFZB",
  "key11": "5hXVQSetzh6UA1Z22uheg9shxdcWrkswxsFiwU9LkpXL98F3p1yGJkxwcuAK8kwMmZMWvD3MoKMbY7EnsXMbCPpy",
  "key12": "3T5UqHnZjhyg2JmmYjEp8Fg2CThea8awMvp6oFd1mLb5xsQUWTfBkNFrTbi5i7ihWWn4QvZ1Pt62meepmARgviHF",
  "key13": "54U8rM1MWaCpfMTWiKxs9PabPh9TVNy2RFKaHHmdrU6SzxT8s9RbuTKhFwFVrsk8yrrcoyuRTVvkfejwkFnpmwuU",
  "key14": "2E57u2nqWsFUfghiCd4CyreGhUmFksJGRrdXekiCsEze1QhF7oaM9RLPociVs4Zo5sUdvuRX3tbVtdaMUgaxzidT",
  "key15": "n5rNgDUNQXWwGQWQ8UV4WnzFPLLZEr9v32T77rwoAK7UgkzcZwKPVqeVBpjmZPqeLPURgKzkhAKgD5tyisDqKad",
  "key16": "2fkS8dbmmHKeucE41EKm4R2ToqdcquPAV75Y8qkggfo4pvHkdt1x2E6296RwLsgKKA9vaVZKLTNMFMQmQZjitFkM",
  "key17": "4mEjZnZaChwE8K46UQagWjqja2oJf5BvwNfSFEeJ4N6H5avbnfSXZ1DEPXhBeiNwKjTNot8vmkPx91MNxgsmkrXz",
  "key18": "EMMLeYANEAfwigUGcEKVxWYkH1DYPgrRZrxCZp57dU8Hj3vusjVuk8agNknSv4p3oiv5r9oNzHgbjjLVKxovwan",
  "key19": "ShMb3dSrHJvUPg6ftCZKJEzxFYTewYS1mYrM2FQ8YeJN8y4kHj7FveZvZeYCt6vjW8h1WrbfErJ1wPc6wmBnHG3",
  "key20": "KX116xc6o5ggQ1N12Dcux2xwZ6bwKSYR38p9pKaXvHYridAoTS5V9JmfUXZuheyEsojvZ5YrApDs3nBnmD1GWJb",
  "key21": "5EH8Q9KE4U6zaJinB3zAyu98rnnQJ1ymyh7J9mR3p8wNskytU5AtceedFvcnJAz3DsusVnuLNgv8Z2GoHDHFt2FD",
  "key22": "5oPZx4dgSbdfXJJwaZAzfUkvKV7QLgzyF5V24WH4tqooUnGWBGpoZpdPXzRdhchrnQvF6sp8gUgwh8SXqqdvGaB1",
  "key23": "3VxCUqPdNn7JG1nXXZ7C6bYFz7UC3oztEbMgdsVhaW6xJTQyvm4FHv5XDSjqL7ghydAekw9P4EttXxopAB4vm3pX",
  "key24": "3YTqpfDabQsDB3gTdtbd82UnCjm3vhHMq8yC7cbwPHrvRGNhey16CYrhLGyQUXDfsitFQzZRV2RYvPPUJR64KNP4",
  "key25": "3KQZ3c8gP8yhQ4s92xyZUNybrQ9p7yBapJ1K9bPmejaZuVyJcNPSmJcG6mSiXr3mnfE1y4Ac9qA3EM2LCM54f6Sh",
  "key26": "67cdaUuvRbSASsC7ok1XJXYj3WJ1uq7fRiDBitCvosWmGRnEUbjwufEcyeitevVACsRnWwGCJJabDDSW8rUmiunQ",
  "key27": "5PSMtiq9Tmxnp3eGmA9EYJP82wm7QWUVBTvjJhJSjWJcNZbYnnCbqrRYKjQLkQdTjzpbAzhGV4N9QWJq64Hspazg",
  "key28": "2YEi3oQajSJtqR8mjaZoZX5L3MP2AZ1vDwawFMbXyQFPZW74QHtdbvozrhYMSnckCxwBFkBn2nQyAj25i4iwtTKc",
  "key29": "53BjhyNtk1GLK4uDxCUP8QvSj7vnVVCQ2ggUS9LR2Si8RfRJdTsxW6TXMkAe921CUTNMjxGHJnMAYcScF6W6eFLc",
  "key30": "47p9qsdKRkQsEN9Hn3EdYSfdk58d5M1m414F3Pn8bxYVswBFkWybFqdKb8GMGtmUt76NhU78YkcggYz3h9vwWF7v",
  "key31": "TDQespwTcv35aq4zwfgDiAbsPQC5V9xL9Wc1AiatsN6gTGFGbNj1txJH9QNCcqPUoreMWQpqDMT1rqKPRUizn4k",
  "key32": "2sX8qB1sLqeWkUwPdhMYY6SfDjxihugTiHzSx7eythWoWeXYAGpCASU6GsM7qFAW6ABXKJugoeESbjZXNSPq9LBZ",
  "key33": "4XZsfL5Z5pbNbyF3Mxe8ridSJq3Abz7oD86WJoofF2ExVYr6dF5s6ixTiv3tCgkNSyT31CCYFozXhSGo6eTjSd1P"
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
