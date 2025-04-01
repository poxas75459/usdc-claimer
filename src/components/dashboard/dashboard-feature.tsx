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
    "nwcYxVv6qKHaJcSN8iqRrsj5qmSxKTrrsB312numea4r1CczoQQaypZnu6fHGUSK8wmZUjmnJwFvyhRTvhXXR1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2tjEBpdbGB5f5Py424hkxpmtXqUL8iTrMeYTMiFWYdK2FQTorXyAeYjyDsWkDaCoTBoEjsuxwwT2mEVmP1yqK",
  "key1": "3cH8PtHA8V58NDJYT5KeNevgBPWewV6atAtRdxnGsp7tqFD6TM1idbRYQbWzckoUVsbxCVwjFaYXFBgVPVGDJZtY",
  "key2": "ERBVPKpd96iJx36vaE6nGLzXKirvtXWpi8FYfRqbAnoWLSxm1kAm2Xg1sBRhRPHzGArMy7tBkAnYvxQHW4C3525",
  "key3": "2cbs6kXops2J7mToFjkDy7Jj7tRG8XTrzVmJgA2tTp59AT6GxqbZi1G75fact64u6UVB35tCxhFqyWDZVtE9zUPe",
  "key4": "3Y56o4wzezVUik9WkgexAR8zj1Yqbmo67bLmbKJuAVJcrL9Yxa9EaHKPshcZeDJ1ByLbZMNbxd8A5dnjpLe9oREk",
  "key5": "2Lng5v8NFZ1yu6SZk1Mcb1oHfWktS4ZKWdwUysWc6nVuwFJWzPBPGgmpm3V633rb944wwjHmJM2ta1ju64aaJ4Rx",
  "key6": "4fcj8Zpf89SnC7LiTBx246o8p6rTrZ9WRB99rR7wdmk4CNsSLf4mTo6QacAMtAzVY3WydDdYbkWVMCaiRJai7Qj4",
  "key7": "GzQc3wac1yS3MvAcoa23ft1eTZ1utSbqEkrxcL1okk84P8eQZSZaRVHYY94R4dn5RqD9NiEoS5JVp7Kpju4QpmN",
  "key8": "63E23utZL8DNpUaT1s94zSbVeeVPTgiGe522mGYzttHaFfJLs3qc5JWnxNrXxvqawktCh7PDZ4oeefuHr59JYQXy",
  "key9": "ZiZafyhyQUGbbPadEBXi3Ud8Af8Pjbdp4FoJf59SCPUQCpwhYK6UjJc2Ti93Rzr3sP6QiZitWJe6Cp4D6rjEzK7",
  "key10": "3eDTskaahJURCCaZ5vLQYUJszS2No2oJdt5ry5cjKru5vFVr8zkpHfuryD7BgF1CUzX1w1GnQmDGqkZo8sj39HC7",
  "key11": "3gjrhYwfRgCNbEwExBZ9zaH2NpzDSB1aU31uMTZ6vDEnQJsw1kJ1EmoT8YR3RYkWEfvmjFmvdjQohPAKCqubj2M8",
  "key12": "3kacaiyzpGVkKfsJKHw9UV7CfaRCsHCMBJD6o69EDqWb8myGDd8BTg65WWJd4cHQhy3BbLmCyT9NfuvTfhYFrt66",
  "key13": "33hkh18ndjUNoxzhMkh5xvP94dD4uBmtAFzyrA4TkBCWBJGet6vHmuSn2NHwnvMAFu12YqLLHafdcTmR7VVe33Dh",
  "key14": "5TQhWcJAZiEosP4ALXK261gsHDWjejCi73wTo14mN7W2darQx3Af2ubcG9GSoUjARsFypdGdsFP9FmhT8GvmLzzp",
  "key15": "2huhVZwkj6FhHqXYHF9AayF9RMZcmY6GHH6AT6G6cfKbxXGZst6TuJHJHyG12vgcFmQ235BxcMNmgKp1JNfK63o5",
  "key16": "52wxPvePk7LuTmitSRsjk6R1jG5heLUyWJJqjdBwKBDCCKTZjyRddqPnT86ngWwiinf75WVANPDUfJFWkm8DCMfH",
  "key17": "BCuNf9Hqaqrgh6gChUKhdJ3CUR6C9sM954P6RGhg42BAFpLg8zvu949YhW3d8szF6PJxdT7ZXe38n4oprm8sZyP",
  "key18": "NTgJxexrffTMqnuoqLM9v31Vu5Ak6pSq2GqcjQpXdojtzQmHcZrZfYPF1z1gTkTc5WkyW6Ui4kq4QbU2US1sMY6",
  "key19": "4FarrcNHXsQbuJv9Ty2H5BCYhDn2nbxJDAbMMxt4zpvEQGyT4P8herBpVeTrLKxdhZTjqxpkq6izz4k6JrBTn6My",
  "key20": "65Bbhy6HFfv72KK1P8CE7GT1D5RWVPGuKjhw3A71ymhVCMw86nwDVbew38TrmdAtgHNoDYQnq319x7Y96ErGAgmK",
  "key21": "MbKAo9WXYvgudnpBZh8DZk3fMrB9aDaagEG454zzF1nbf44RS7esUraxRqmJGRNMWB6a8KAEjYBtdvuSPiHCmtP",
  "key22": "5Co4UXXhNCuMA3ruqb2SxU7AaF9Je7Htt3spX3p5VmeQ4VxdecVFH4zGHLU9Cy24bsvu7mCkc2Q736qh3V98UE7J",
  "key23": "41UghHYjdzQu6oixBU6DSsRM82Wp7f7o8prsMSxu7RPxuzCvAMneGUzW9Vxx1xnr8GxqVvVjFinAgni7iZA26iKK",
  "key24": "66SmHzzps7SWnq7ErnHJp1NQUsJTir2RiTxw8YnLLg2ns3DgdpyYnQdy4GnaLi8w5sXrUDWCPPmCNyW4tdTyHGVs",
  "key25": "3q9JTYpeNypeEGbvECPb1ZygYwb1RwKjGhcLLfAXz2PKgvoRCFNvHEik9qCWWCPQqxh44DLi93b4BAw5Y8QhkCLy",
  "key26": "26NegX9w9YJEy2FEeo5mWWwP9eCsZJYay98Mq2RzNqcjLn9YtDK11KJNXwW5VvA6tZhrsL2wqQWTX5av8eZMt98Y"
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
