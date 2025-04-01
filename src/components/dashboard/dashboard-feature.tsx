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
    "3pNbUtYU4qy9bSpAGs25muThoHhpkL2bmLRcjcSxXVsDySYQjdx2Vw41Ztq1G553RbdCMd2786KY9SRTbdLniDzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qMXC4QJ1eA2Cc6iUyaKMQapiMd8oEpvBBCM8cdoQzUEAxCEBz3a8NPUURCBXgBF4HDDiqWkS6xKwFzFmaXmH4Pg",
  "key1": "3CWJUN8pr6cXTuBABmGmrANoS2m5obF8sbe9owq84AxPrFBhcfypbi8GA9DyV3Cqiy7ycm155g2cAfk8KgWBofRo",
  "key2": "42wHidj3pn5VArX5YMAqjUAKM5WrQV6CKNjgAZYA2wmCVMpLkTtJfU35AVJEvV1axv9xMv9GWvX7thxagDmiA6JR",
  "key3": "3GEoUKXA4niCAeYkgTh9A5tHqvJaqeBSh8aHguY6L1xX5e1vvSmYfSkcz3KB7GEqUME1gzZEbxfrPXuFtAx9VQ3G",
  "key4": "3KrZRfQa2iQKvb1jbTVhyfugYT9rP7c5G1tDpNF7FuS2NHh5ADLtCu9pvX1njBTEz9RxWdKMpBatTYVUNYuCe5wK",
  "key5": "5q9FWMDMTsKqLLZuyo4U9ibuCHPs2ntib3w8nT7BaCYAkXPd9LSoZVJdz8VD8yqF9u1xownX85XNQDWLBGGQMb5V",
  "key6": "EFpkzErYQWpA6Bua7Znc6bX8BczQ4pvAVap7yrr6a1sJabQndWR2wNmmafehf6JURDkPcuGNMPT2XjUqdfeBRps",
  "key7": "hmnwGuFx6BVDavLYHEQQwaKsU5DPU79KFBT7MfDTnyJMNNZYAngXr3au5RPtMxf4N3gX4S19TcCffD9LzVTGmNS",
  "key8": "yVc1SyDzDyzHzqYQCgaNVRSbF48hS35eS6Xzna8v9YhHsnhGuiZDSvU5RX87SimM4Fan9N3gcT6FKFXt8Z7vSDp",
  "key9": "5D9Ms95idKceMrd5Tm85SvUJaeKgt7TniiYEbUdHmA8XRsZeV2sZYpoQpDFBLq3ZVXoo4TC22WAyspoLuFcqiN5e",
  "key10": "5ysLTo9X7We4wwPHaezz6FArup62PopWsyJCrZVRnTtYVBB1DuJLi2GCqoBnXeLWeMsmHuuJep7oAzGjGofBrq5G",
  "key11": "27dYTqYWtiNXPvxBFgfSgCnpFL9TRv6tMqfwXNZh9mZ8YY9CtAJykaUMaRbP4zrb3ncTV3roV4xbPz16yimTt6PZ",
  "key12": "3ye9Fkz2xaSWJqe65GP1yKbymyuwxq15gZoL1c7NaFmfqoZwtWnJrtKvkLFbZZ8xczftwvA9PceU3dHJptF19in4",
  "key13": "2JM2KdvDtDUzdfSw9K6yv5uWPHDpcyV4TQauSX8a3QgaXbJgJH7qDmpAmNwkWTgDHNa96W8sQzhycnSVMpi1zhD9",
  "key14": "ZgNUK5mREdh6S1Ri44ez7BvxUTH4tcaPG1EzcMrHixRiaT8KQCvGfbgKrVQvE3zs2hPq9obf6mSupkzVN71Cbej",
  "key15": "3Nv6Ro7QHrMbguFPKtP4L9oSu5AUzSCWCHTDakBhkw51f6S4TWZCMA151xCHKLGgZBAnMZB5DMWbCyBnmGs1G8YU",
  "key16": "4NsVEnep5GBP7rP1UVz9ZntiWydz9dFFfCu2yBugiJJKUWg4zCrsQVsEVNsGFsQ8SHC2TVipDw2aKQMf5j57BQTB",
  "key17": "25EjzgtRsXaq5BotpWhPo1kZrDXkHxgZMMx95heM7nMito41H75dpj5ZKxaTRdqmoMEcMEK11f313C4zGVLKN5gF",
  "key18": "B8kqaPE25SkKdiNaEKPXBAyuV7oomRtfDW9dFq3wrdPLavzh8Dtc4UqEkThUm9vGHGjAhXinpSUDgKinYF2FSwe",
  "key19": "3xPtfe6YhowziHcoKrRSymbrzsq5zDXJws91GEDKXdurPMvbYhE3ujaC5aoVcR8doNBS4tuSsACDWSyF8bfSoRqQ",
  "key20": "1WE7fgJeZgCxQ9Jx9sgzaNTVphEA5P2ZW9cLK8JLSL52rB1Pe6Pf7sVbUdmkpQry53WBRe43rdNGzzA5R4N92gv",
  "key21": "DuY4r2ngzuA2hYAMZkMxpouHyvCWWa6REvWyjewXyPcKhhmcNrdXMcnjuLwjhYW2deECjZtAjXurqmJk73XZxXT",
  "key22": "b7iTM4rVLKLCT324zuSgg9hukxiimEh1ZGJN4ViK2NfVNZ43JB2uQXBYj2CGcQiLqiu249q7xkswPimwzE1Kr6v",
  "key23": "5ZMUAgn3m3Gqm3YerPoH9RftrYSnpwJD47zvhkZMtnHyDb8U27qV983NDb3Goig3iLmzzDKoEtE16bhmTZemcbCP",
  "key24": "42c11SzYZffi95SHsvUygvvdvtamTFsRhSyPh8LnNigRtSY4ya1tw9ut7DZP354Q3cEzmb9SKqwen51WkdC4W3Sm"
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
