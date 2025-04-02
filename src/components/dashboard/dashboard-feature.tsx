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
    "3eHsMuejQi1DrWjy4xY9KkXyM17bf2PFnPSN1SSGxM6A9pnPQSBypBtr8tVGKSJZNQjryB5iM4cyqQshaizJSNJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TUHGsd9asQHDWSJ9KhBs1fh2YCrorxaNNXf36Z6LBK7UNWFq8X5R1Qku7a8226Y4JS6eg4LJFpmPMeG31XoKwSu",
  "key1": "3xWKPLpJg2FBwVvYPTAyndEpQ88iMxvUkR3UE5a6uJxghrzx5d1PBJfZy3PeF6ztihfEVuX4tuQBXGQi6w9CkwE6",
  "key2": "4n4xuv57Aq4UENYB6Lq8BRimpPLdG3yszi22if4LAnzzySBErKfmAe6LyeUavvNH8TVfHwCfpgVjHmCiw3niETLi",
  "key3": "4imvYZit9FTtkHQgj12qfTb4AFd1qUipv4XyiqWNoKT9QmYbpFdUjXCSmyhJp987ZZxcJkezM4dHt2RB1q4E6UvU",
  "key4": "3rWJpDPoX1VCHtxSd6zo2CB4oEC9tEqFrtzAirqt7RcyqsfPHUHfFskt8inPQsaESrKj8R1tcNnQKzMQSGcZ2wBr",
  "key5": "3X8p4d1fLwPrrJyyf4UVaRVKLyvwRsLw16WVFfcChG2WkSCZBL5zZdiXrwMNQdw8HigRye1W8dSoyQ2WVzjHen7e",
  "key6": "cF1es6Gm3ehoYrLHzUzyvUSxT9cwmQGvajMN9bRbcvexcp34gfQnm4PaK4ZCTdG8sadv9tuBLv32CwW3pnKneBp",
  "key7": "2Wzy9kTFp9hRCuUisZ3b9P23ELK85tS9b5JwAYkxG162cqjCHG6cHxnvnTVnr5K3ULMQXtoj334QyWBAaHUA3jZz",
  "key8": "39oXsc3fcTDUsxbidjvfeySpsMCi3Wo8Pie2M5udYYgqBke8RpETBUSzqELEfDW7RY4HSxfdszeRs37UgbG2cGbj",
  "key9": "5rHNbXRGdkgHEQfKa57ZgAMUMBMcHjupskQPxczpiV4vPWa9NNFhxyxqHx3EHSjNgVfgDdwRhjs1wEayNULVodKk",
  "key10": "1GMrcZutMQJhGwAYevZRnwY7uYEow9KpJw4s1oQCgn1oiMAtt3dt2r1hXe4kRV6w59DqV88RGEEaXt1j6pGAcZi",
  "key11": "2AxSkLdvEun5cXfwyLTZuacJHPuAQVUUbcqFSyxYp3Q2tDm1naCDFvUkoF2BSnezSHJzwu1rWUaD5SSuc3K8yMGz",
  "key12": "5pkoPhNhr6RsudFTCqy4xcDmozZWxrUEAeQsbDxXjxKUo2RChRj7P4yXRnqk9M9TfHmnceQ9XPnvfN84PQd6xx41",
  "key13": "Z3pCFhUfdU3saKpF1XDXwTTJcsZxm5d7nQKzQFg4ENgq8HLRDyXpqVYj6c1MnjrJb2T58qVNQJvtC9V1QunXc5U",
  "key14": "5A3ABpNy6B3on5deevYa3FnCzKYbnCmCKtvQaSX3iFE35whkQzHakvw7CK9snD47mDrQvSWjGxkYAkuAbhnGD5bJ",
  "key15": "2SeDp8TuUjaCzsXNhz4JeejS15UquRVUNF3heQ8yJz7TLuKMEPjyAPAGdjhj5xXEGd9Shvaq4fNtymczgUYEaj1W",
  "key16": "CEiKwqxtAM9PuhjjoGHtumxmEcuYihg16ZdyNYpiSR6cp2nmehXKeq1VSuswb3Mdsg5HpQ7LXUQ2WoC2DqGQC4V",
  "key17": "2SqWStAQvbBb8npfCkoetckkQeBzGhTBa8nhrC4smHMwiPY257snNCE91fTFGZoGt9C4wxMSjMGdcUUwdAez64rE",
  "key18": "4XwjXKvDtt5F89ow9FFTAEMGqn8yVdSkFfQJjosM4rkpf3CzV5M95SbWhohQAAwq1zbYrstYFsY7ZnKeC2JJ1jTd",
  "key19": "64Vo7mnytG3Bcq9vaWQu8L4yWCdrYBesY41tTQEn4G3P76Hw2fyH42YeRSv4WbPNLk6GD9Cz7HTY5S9v2MZbmyus",
  "key20": "5CAhKu5EA8Lb2QmKgDeqZgBdrdbMTDkXYsrY3TYRP18pKLcdAqD758UMMppPDnx2Zn7botVKRehhpU8i4yUny2gQ",
  "key21": "2YJPeRzKrcXu1XFAkEccY3xv6rJp1iF3uRjcuYNhap8N3N6ctkpcByE1tnj4U6Y3Vz8VG3U6sbu5GeD2jLLXbCz9",
  "key22": "3Dt2BS5GY5nmJrRD9UkYM2tj9ChcFzxLaTvFnwDPipQkQYt1nk8gFB9mRizNpcb2JXwp4d7J17pWFFsbmD61TRR7",
  "key23": "24gkp5kxcRCr1XtkEsKa5NJJYtZmALUcFUT54S5X1gh1j8H7mDxYgU6Jfo6pm2FF5xVxo7Nmt2NTM361nXgDxi6w",
  "key24": "ineXd1hmfbAVG966njXQCia2nQzeWb4hdeiNLG13P4rik2is6SYwpTVdJ7ehqzSW7gk8texLhUv7czSCzjz7Feu",
  "key25": "3mj4k9WoKi6ynU7yAQBtb6UeqmGuVNWFC8sK68tsGRPhRbCrDZH2k1jF9qvo29ZR9MkrMXffQD1q3HpXdyUf84gB",
  "key26": "4PzpSFdy6ZoqP9aAQBQw5yAYQXcrjrCMe2GLAgUnhGRuMQeVyThDcdkSQcaWtpdpiDqUduFvheQYiSrDXJouBsQH",
  "key27": "L7NEM27A8zF4d7XKWRaiLtY2pziwS362eYs1FHNxgefe8T6Qx1jzBQcGRxMz1QyCbQ5w18DFrHYmis4gEBiiy4Q"
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
