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
    "Y4rhqLdWxqhX9JhbbmP7zNTQtZuM7iVfReFEgxqQcp1dTBeDYPjs7uRSkb2FKbwScwfgZ9w6b77mcnJdHqRtNS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WtxoThs3415AHKgGr76qZ9PAdkydda2kpELn6cdkk6aD7dpQoUSmQeqMNbYWQYYHQLVkg8Gb7sDkU1RXwvmqggs",
  "key1": "evdrpatsVvioqowCw5T8JgWU89ZSdLS8fUT5ua8afW96tDNB199jYD1sMKojg8j4deVk2jJrq3Q2TY16WFJ9NW6",
  "key2": "3ymoTBdMsySoizUUbqhsA3VCmQx9ZzZjGZRLSDhx28Pat1Pgc5E6suUuEwGah7a5Kfn9sYmMKVwa8it2SroML3zn",
  "key3": "4dLK6bpdt114RHNDcvcJCouk97eUDnyfM2MFgtwXoEQz5WfWKyG4RVRVANyE3fC1H75hRoUnJAZisefrn76Tbm3T",
  "key4": "5Z4McYZXw2JWD27Qm2KGAhxhB9jsKtyFqgkFamdAeuvvm9Nm3p2VpbnYoBR1EYGkShtVzgjWNKG6HmBacQBvy94N",
  "key5": "2XDz4hzkpki5pErcxghbx8Yd2EC944BSbRHp1K3d7ZXzXFU4f6LH3kzNjRwMNZHHCNFXvtxZjeQ4VvNxeZZ2ReDL",
  "key6": "5GZuShT7ZRJk2rNy6dq6CJjWtNUScqXNNNUxSjGPZthnNzZLoNVQMcnG4zQ8vxe7gHwJAbg865duJDP3KKNvCiWp",
  "key7": "5jbZ8ssvnSxbPJXwi68v1g297tVo8iFbyUSgYiABujqGKkAEKk9ZLTzC7RXzNYngG94P65J3BY2aKTWJw5M2kd6B",
  "key8": "2Xe2fMjywtcJqf5zErR3JAVGCvnqVukthBCm1Bed1usvFsm4xQPMRm9D6VEq6JWgvKDp9RZVuUidE42KqpVVFtuT",
  "key9": "4Pktb4uaJfJy7azzvAmX5Xc6Bg3rK9om9A7WGNfzKCmW79kdrEfa7y2FfjAhbhaeQGAgaf4PtBZSDinfE8vBNtxt",
  "key10": "93TSYbk35FEfy9mGy95eKhAJTwfkHS85n8pnDSBtuxYTDNgfC2RVJ8T18sZMetAVp7tZLZGy71CS9MjYgp52FTY",
  "key11": "4P7yRbJb81mMxSSXohDPPDaKBw838aGoDSYPcsFXZ6FTiP1fxWaXFar91JEo7ggQAfSNx4NLk6Xr9Rfr3affzjcv",
  "key12": "61z8ydYUmSuSyGopcHacbvGW5kKBzp6xyCNhbRGYuYcbb4Y2GucDhdAk4yZoeyeSD3hGoN8FXUEXDkBMvspXVhnK",
  "key13": "5v9wWuzkeumpV9hACVZ6mJxEWs4DPj1SkPoA7v6tWFxnUJMo5PM53GszPchp5Y1ygTYC5cpo9YZSNGNM7wZQVrkA",
  "key14": "MuFgkEX6XDfbQcYpmr5rCqWgStNhwDTBG7Gz3fXWtxALPkzGHnoWVrMAPZs3W8U7uaJ65zUReHtC7f7nn53MrTs",
  "key15": "2E7tmGXHdS5sYuQNYyyXKwcs3xRYPuiGrvzweVoc2r8mzvXcsVjk5EzS29mCs7AaJNQZJ1NDWePUapkZ8wFsCdBp",
  "key16": "3E7Pe83gCvj1RegDMgeSDZ9NMYHzPzKKQvpwcaKXQEXwow48GKtZRy6gdJo6AziStZJKwSKSu9htPrMaVt4pC7SE",
  "key17": "49vyVPzqY36fzwWYTNsmzjZn462rfZiRNfRgrAv93Q48YHbGhxa8934bmQLAZVTxUJYN1ZvZg4FuEvBSc9che94U",
  "key18": "3p2sANP6rX6MoSkx1JnEQshzgmEnfyPeLGSa5gP8xdy9Vw87VK4vovBmnaQxRHyFEFafL2Z6SJZG7PLxUewSZeZy",
  "key19": "2hyUfNgM8JZTUBn62VruYUqWDU6TXfD4fNBGMJEF6WA7f2cy813kBV2v9YMZMAv66S3GGBJYxYTUVqGbzeEVhBoP",
  "key20": "ZgMCFeiXFxf5pCw9sGsaYBoQXPrvpLVMJv1QiDa7hUZ1Wkas9tLnmw4beWeB2DPyZ9wXjcjYHEgeygxitGM3uZT",
  "key21": "E947WgaqUXMMcQ1eJvEhKmgv3AMPXjws9np3HaQEH419J2A84k3oxG8FEtqvRJe1mJR78jcDUdUHtD1WkNwUhpg",
  "key22": "Q8U18m1PSFTd5ckJBk8AkCTtRyw2FfmiVGNrPdrfh5njdCJK5kmpcmKyNYz5xeAVYa2B2RJVw1jx5pZGmDxZJTq",
  "key23": "2S42oQKwbmRdzw2mSoA9MwRnhLEZw4t927FkpNMKUDxfu6rs1xN1qqUdUGR4SP5zUVGCKpqVyuUvPjf5S5yKj4q5",
  "key24": "26oPJDNNQTtdR3aTisF1rhGmjGe17RVaq7TYnNhpkQWLumeqHS2dTTc1RC1ZjKW8MtXCGgS34zWrKDUbYkmZvjy1",
  "key25": "3UrWLZvPJK6Un9wsCcHrr4qgNhBsC4AS55mLyuzK4Qzet4CiJwoRyWdced9bRsjZsetPRssSH2fYkg4uL2WNJQbe"
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
