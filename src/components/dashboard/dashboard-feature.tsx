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
    "ogq62J389UBzki98u2f3hbQc378d1DQ7T4EWHAbGrxsPXjt215qY65nRnFqrjDXxboobpgaM3DzujhVSTj3NmRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q8svnW9PYHELyuo3GDyvo8DzpnWwBQMfev746kvHNqBn57Jbi1veHBc3XfTNQNozhXhKffuXYwEgDy6RQtHy24a",
  "key1": "5jEVv24XGTPKWtConUjRnH1yRd74D2RtBuYWocXzGjNrN2ZrYDamtzjzTqNo3gSREkxgmgJUzEfPXRwB4rwZU9Zr",
  "key2": "5G8w66NcZqQ5u4CyHiQHyUd1KikNpc2aB7YaiXFKksobNTC4bTE6WnSYszSjLBRFd5gq5GLD9xdAW79DkxKyrQNH",
  "key3": "qSLpkJnc7Q8i1Za8hT8jy4WFdBaXPjBsmNNyL9jmnneP2PZ2gfAUrrTR9hfsbPSm78tmG2mseFwFYVriCmrWhvc",
  "key4": "2RqAKA2T9yeuzFayeg1nQW2AR4De4nHJfyoKdXTeY7KL2huj6UJD9BtY3rqioUCyG6HPftYqevcvD2vVRV1dehx",
  "key5": "2QpdQJG1177yGBmU44Ac8XMMxF1ndd2VBPkWDptPqv1ktfs5dqBYsop5FRP1jribjPcgnrEVrj8wDzFBpSU2CR7n",
  "key6": "wwSCLqWNK8rrknAqjSxgykxxT2nQEa1jzbLgws1Vp5kQBrExzES8ubvHXTFT8ab9fh8hrMbFPpQNjtCh1y2PdsS",
  "key7": "4kDN7KvqriVWkBP3LSCoQ32Uo949a69uGjgAoeC72fr9XuJSVfwC7fTUECEsu41kgRwQZT3SLWXVjo2ZLawDHak2",
  "key8": "WxQfbXjemrWoVZnCnMT93q4FHHJbACTwkVh9dENGBNVd4DZLyokSRwsxF3DEzohRBaos3akLf8iwKDXqgoTep54",
  "key9": "2JNp6XK3MP5HstZsdZ4cx7jYNaApg9Sn3xQxfY6ckD8tt4kMfkNYGeA71X9mMaQ5GQKCe9pBBcYKLdmUpze5XUEr",
  "key10": "5QxzkJUFNcZktwPHyUPxNp7P8u7Cs6MW13xKwHJ3nrnHUB3DJfYRnmF6s1XQkxHZjHMxErefcuspeCTZgpuAYgzz",
  "key11": "4R3cs4owi1e44yLuyWSwvHZCQPNnVofxjKJTBoDwMgPKNqoD2igDvVLrQ9ApnL2JUrrUahBnuaLTZvBRromLJ3es",
  "key12": "d135LYWLgXNgTTafZWif7ZgFEhL1J9wQ9P4qQQzx9F3WChiqLzMgSEB4a19LZY7c4e4jZrrDzA8vga48LhqboBz",
  "key13": "4Px9zyGAgGM7mxWExH3UKxDuz8BpJUvSXmps9zZhHgjEFSg4zXKhPySJmyJDvBCiW2XujmWPRPgzyjgD41h9FS13",
  "key14": "2veDKdaJNZrSM1Y4mdTfPQvHgJdsswf6arvcY4YJ5gZffBn9EmPe8vKMa9YAvVYwsy6WV5vU9gX2wtyRxYB3eTtY",
  "key15": "4LFfE71bSRPWLCRLh7okVZL4Y87MXoBVUq6hscxAn55CtNuU3ycb38tLDcDo6TE3eFnJLxmEg62GP9rS3ZdiT5aR",
  "key16": "2CeQFtvTJiqW7M3rvrkJVT1N43LAJmX3XTKKfgaHqxadCPMdQTtgHn59jBZwwK6haYsd76EqwVyE9nG17Tc8GyTd",
  "key17": "2zR74xigzdvqZ7uje3jakci7LX6K8Gd8UD4AzT83LmGsQgz7JHN5P19uTdSYwSGivZgVW21jd3jucXxMxUtVJ9TS",
  "key18": "4rD1XQTTjFdeEAU6WbnK8KDa9Dq9AmpPVct2EWaoAYoH6LG1QmrZ9CLEzFejxYcfsbmSpmATB328RhFhFNWgBJf6",
  "key19": "3EmAytF9K3Rzcw21r94FfbHDmax4Ts2SQY65YUB8pqcCuYg9AQDGcZyEDPqTUP3eKZTVipt8pdRqrqGrnqpXqqjS",
  "key20": "38YaooudWW7UZhRf2PfzBHizj7PWGxHzJK4uPQRAq5jL6uQzG4MWWJaYH2Kx3KjHPsMtoeM6PDyyi8vyiLVGJ4bD",
  "key21": "2qr9JLgL99cgvNE5mkJtQF2obo2PRnkNt3ep6g3N2PWtdqckryZj2fEgV47ppZBUrDTsfUnGRb1fBu9vEfiyUcwF",
  "key22": "5dSe8an1hmoX2WLauuxRXgKedTtp9snbxA9EChMPyceLCNYWkR7afa3xTxcvtSEabHcPsZ76gWWDuQAtdYVtrgUH",
  "key23": "5iErwnTNW9ynhvpype2fNmYDQAGDPeKtA6uBizPt8HCyyTJkncSvbyRmiYGafwWzybxVvj29QL2KDoxSxSdxCRMt",
  "key24": "3rmhymNj1yvpFirSFWg5spJaKTvXSUJ4CvGWVfFvD4ycNNY4wAse6oHiecHrWEKdvFEiYjFr19aYTEcLSj88mmsF",
  "key25": "42uSurndQiKAuSkXJ8SpynbKawAoV2u9oxDsQYWcpVjznXWMMzB144E6LVtm7CuAmoSif37Cu9obDSMahe6HRf7",
  "key26": "3jr31kynww3zSfHKfk8pTqLWTb2gbiZ2v1tVuqZCCwHUEwdUbd3HGy73qqN5vCnc2fREs3FKsAgvCXvV7YRs8mmv",
  "key27": "tCczPCWCMSoGWui7xYJvjrQAvs9vR7BTNmsPYj1KJTeJX8oj5V1t1kffBwSp3nRgeuSjXtxaT5CCspP9tBWXdUU",
  "key28": "4s8tiwH9TAEhteh2VwBctmHxN3XkVXtx3FWQ2x5BE2eUhLWPoBwGxctP9jqvrR3xPvscup4HyZEsktsVmT6kEKNY",
  "key29": "5PCV1LBWcMkzzvaMdg7f2AxSwLPqWGNYKz1AGpRYixmAAUzZTZVxbN2jALtZ4SsLmsqRbotjUcjRfyyU46dTEjuy",
  "key30": "5dFTNHedJ8ZGzNNs8t8UgJgmWD3oitp8MeND72tPdccFH74H8QCBaHdLc3J2iLe3xRGq3e1S7j4KMpqbn5sem4sS"
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
