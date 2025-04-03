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
    "5sRbETxx4zM5oFttste63ThXXaU6rYHd7wYCvQyYFgSnAM88CBQMNubdzo9ww2CzqyDzGCkcj2AGCYWcG2g3H2us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JfjpdWnTFZQVLsRLD4MdKEWMBkzntDffSWGY9wG4knUaxo4941Q7LU7HHJAh9VYZKaGREedt2aB7dsjLYMqaC28",
  "key1": "KiBbFQTcZn1CVrXNWBzknZ6V14WxtVeA5GiGEHK34vBsdNM7HkPHmssgnYMNEcU3W6uvJbFRkNxGkxFCNKcozht",
  "key2": "4MRCX2XGPgwFZHCQt6A6qh5qXd1NxapThkN8LNVyqih1xo7KKFwCDVjFcwMR6UZiBxYveUFavVcQgyjhRmnQs94w",
  "key3": "5TZQeBibJZ7Ao2PRQsZsfr9CajfCx9J8dWVuq84EaQdrKEqb4ACEoiydZi2xTkZHbfqnyp4d4Y1Z6gcf2C3kd7Zr",
  "key4": "34trttbvrwqGkCNEVyrHZCU5VZqSTxuRNgmPAAuJUTc7zHRhi2WkMa6YhmnSo4gZCgEGcxjKYk91hbkV84UGj5Yk",
  "key5": "2mkJ9Rh3zpTWYpFwGDS55rSfCH5vuttAKxjQjAPVHdpav3VRFtsdJeSt7ahmSLBhCNAK9r9jPnecqEoVd9c33JTr",
  "key6": "4PdPBK39g5G4eTKkNp1DXkpM4xs81TEpQ36EkJV23rtdZNTcEynyG2eW3AMcWpTqNGaULovL12soFwqUyrq9e7S",
  "key7": "2X1kGkzKvqch5j3Q8hUNb215ew69VZ1YNhPJnPqiXGnWm7M3sU7waM5LjQpTntA7JsTg3Gxi7na9vELqcH5Xuviv",
  "key8": "3BCtbvjV6juv69jh12RsPecTVFGKCQoF6A1YG8kRMwcAJdA7o6HQEEXVXXWXhQAT7ZPc2hxg6FgE6UqQFBA2HY4v",
  "key9": "3JLrLdTYh8s9ceiQiL9zxRC1RU13QW97QM9YuLvsyJgmVKho84SUzW6UQ6hJmgskfBi7oiN42HwM4t7ebHfWmDH4",
  "key10": "2PAimSt98WotRmbToH1MQmLE62XhUpcdEdwmTUVwpKJWoJjoQfF6zTti4pXDEoELyWVFhEDY1RYLdnw1AghotKE5",
  "key11": "3QK9AsZG25wjgtDrWnXJgudsFAx7Re4krTdvxBs3anfx9d92MR7zM6hPpRfFGouhuBVT7NEDqBX65ooK7dff7vqK",
  "key12": "4LknAxh3X2jm7mTTReVs2rV4XeyJWbtckDFQ67zwGLTHBZArJL71ZJFrrSPmSXUCYdr2D4fMYbHBJjK1tQzg6Ksc",
  "key13": "33JJbQLjDTKE9DuwNk8E8enGU7nhiyKTH7A2YBoPNR5dpWMjsQ9FJV621jRLpwnxmJQyss9DrfBFhzkXyYVyjs72",
  "key14": "3NZAskkTw4gGspe8x2ubgS8MVCoEtaPSa8eKBVWpJjQhxzo17LVmC6EWXCC33BYncrvcSLMZF8RV4VapQvv3Dkku",
  "key15": "5R35MQUDrw9dTg71uiq83quK5Q5Ata2bjNLeZ64rLb4zFEcAtrq8ypxjRxUQYun6c5t59gaTs9siougH8jXfu33S",
  "key16": "3bjC83TnccMmfrTwvCSicfZY4Lm5YWkVyhEFFzcGJnRoMpCNGm1fcXh913zghMSUSHaUfgcjVF5Nrctk8g6eft1R",
  "key17": "5F3Gvk6nFbyzw7rDZYaUjvb6k7kwtaUH9VgDi8tk3AcVdHG1ktLnwECY1iGULtLGPTcKdUoW3f8FUtJ8o48UxfaL",
  "key18": "3r1uF3QbV8mUEkZrn8gJc682JXjzesK4tFSgFUXT1TrSnjXJWN26SrFFxvzom5hUHiMpYHZ6x47KnAfhBevZQYK1",
  "key19": "5qQB9vFegZnZasXVqFsoW7csqCg2NZEwGjg5kkB3k4uLaTKmJF3hNC1GZo56DR8edgdsrQa2EV8jwDbtoKkk15WQ",
  "key20": "33D5EQAeXcwB6iZ1LBPGr39nYuUzJ19fLUQ6igmszwTA8EGdpjiPi3Ptzu44uSf64je52dTWcnzXVFN1T2yLye7B",
  "key21": "3RTJfUsJgnEbf34N6z1ixegU5hGzAtb3ggkUtUGwvUzA1DpR5RzCTQz7mhuEJ9H1CZgWvGS5zQXARcJFvRyAntZa",
  "key22": "65ciPWXxfYp5xTySWuonncNYKbA1jQmB8e2wJ8pK258FUygWJkfn1TfDRjfL4Lo1D6XqLJR3SMcvX7RUSYWL2HVB",
  "key23": "2virFVQLVqrcYm2Gnkv1i1ZeNP3G5ABBnfmaiJcxixiVX9FbTMxuDAjxeKT1MMBKxaTQQ4yC3EMmWtFKiyxjs3Qk",
  "key24": "2XjfWqDbv5oLJJ76kmBtoSR6hUHjRSsTkZW1EYWpH8oX12zm3cEe1SZvvMRqFx5pA7WX2ohWeLdyTG4gPajdbfJT",
  "key25": "kRg4DGWnoG1ukHfBH4J9fDnZUU5m8tzJT3kNTmDCHtqwynpNGS2xxgLoi2V3bCL8Qd6qAUr55zYSzMFJPR8Nz1t",
  "key26": "3DuJ1513NuWRqEK1bcD9ZELQirjGz3n9sBNUvEibCVdRvf5ZJ4fL9xyac2xofAwLkjQgFSwyZuGwM8Yqh2apZZXq",
  "key27": "4N6QMu7kjnyqpdU657nY25Mrsb4ZJdLReoe15FT8eKmfZ4rRDp5guooroDSBXfkbQNRGdfW5ikPg4Gt6kECDenLG",
  "key28": "5wMjGszjnUY5eLCYsZRYQo3We1sJMXxsa8pfBX8ESuJtna5xTF3Wvh4Us4E4AtNBAwq46Dp3xAeDMsQGxvujVV5j",
  "key29": "4AXPpuPkQyPLpZdCdo4k1YfrfMArcpy2b2pQfF2zgbT3EGUGx6nUEsGimLqpkxQDqAcmBdA57jfVRtHREAmvS4Zt",
  "key30": "2WqrME5zFD1uneeHTdNHEY4K1Vsyxht829Wmx99pjfsUreFUnfiEk2T93w6BE3aJU8AbPT4wbforKijuAb9qJKDU",
  "key31": "49w7c23EE4mxRdzt9WxVFMR2zVbuRfD8hLwcKGCvEU7dWWY2ExRurHDHtJ9WvkiepT5Z7gQLhVjwJxNFukX4LQzA",
  "key32": "uobtTpXfDRLKBCpkSdEVKPNvwmS45ctmVW9GiVA8FdtLNwyfovNHU4k93E9ZUQuKDw2wMw775QvRvDRRJ4j4JeD",
  "key33": "5vatSRFqCm8fhWFJWnuNJmqsQVsCoKpf9zaQTRix6b2YDXWknyf53BBVhx4vCAPT8uYrVxA13BeoZxuxeL8WnGcc",
  "key34": "37jsm2PrFTmgw3DjoLSF31fPDoFsgfQdCZamSu5PKVZH6ofkk942xhfXdvuXMTnyC4juxaKhD1JzufGN5mCNj5jm",
  "key35": "5AkJmxJJ2kw9xk1GMxFRr8MgP1X1Zx5mR2p6ihhPEGibnwptJSBoHFtW4g7EtYgbYvGV5be8WsBqJBBjFJYyMoBb",
  "key36": "5EuqXQybz7uqGa3QfbXzFk5EuDPKJ9LoLMgRXzmdn9r66cNTGSgQk8CZEmsq4LFiqvAD8b2mwATyATHjrASBgw1G",
  "key37": "5UgvVW1pdb99UAzrVFiFaLhVu5veq3x7tfCn2Y29UXQV2Mrf9ZoPeY7xgg5pmxLLX3jFScrMfnSWRK8LM7PW7AXk",
  "key38": "5WrMtiJLBN167ZNQovqXVioqDZfN77H4gNWKwj9zSE1T7CDHuE8CHsG7nKk29MWdxzqFZ4meyphnXNJJhnsWk8tz",
  "key39": "XAjhGu49hm3cPZMFNH997x2aBHiJeyszMuKBXjSzfM2AG9UpkCzcaqKEcPeF7nhNBV6nwLX8ZsMuSoekp7auKnv",
  "key40": "44HsYai2JsMjgKkrLUeASxhKiRtbmHv2B29Z2YrTyUywqXsynUCAofUyuZ1Xg4n48eoHJVh1eRR2D73ufTShDWr1"
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
