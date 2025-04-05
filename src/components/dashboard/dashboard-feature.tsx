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
    "63B6hLrkbiD8f88gRrwQo5rNxK3HRs6bhAN8GnM4aaGaU95vVuDW9Jv4LXLzQGbMVUiaa6JcV2YUfcPCMmLkgA2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dm2kKuRgX4SsF3E8Ukc22S8GvaiinzJNSUoF9xpY5sxCuuF7vFeL5z9mfYAJySTacX7H31Dw5P9R5YHPXeC8VvE",
  "key1": "4MTKue466XT2LdZJR8uaVMexnAaoAKU5CHwW3sVfBgXC7ouLVD9P7vxb6RWCjii3HjeshCucXgQA39jj8pRXzuzR",
  "key2": "25x9tJpnEdweGL9Ee3983JyD9X1ytpEqrh4W9XZzPWofkhVBs7BzTZjpPrGisZEirVVTdqYYM6PTXHPtK8oK48nd",
  "key3": "4JSujh8s6d28kpKN7QSoopmxfAyBUL57bnxHFzVmG3JMXSTMhUpMfNfFR8EViHJuazkrd6kzNuAS5c8EtifBxssq",
  "key4": "2aaiABs8A2juiVgWkbGobruC3VZFz8SB2gXLmZ3Yk6fFxrsq5cuTGcPuciBXS2qjJAFWxUudQmcPYxSrKWMPtNLg",
  "key5": "2Q61HxySzbqvDCnpvoVD2NQAiqknW4JHE7aYR2r4K6GseE8wzKScNz83uHXDdJHpU5Xs2iKZy54CDXNkV3f9nz3P",
  "key6": "5ZeKLTSgFsoDGpeg7d4GmZibNhpgiAGX7wSVg9zNmYVZN3ggsyAosL4vkJXDZkweUx2B7vDSTwHTfBcQmSL3EwZ1",
  "key7": "2kAt6PPKejM9rPi7dgZzS3yk2ujjFfHMQn1sf52wAU9uXBkkLaAn4wzGcc2VdQUWdymd23zRRfyHhVbv8Ta7Wcsf",
  "key8": "4j4dFXdUHpa2XzUW4U2odsNxnuPGW19AxKy3r7Zn8qRFBvdYHmgh8KoCHP17jxNdxbhvCzGhWy3kZFfhnnYEPMef",
  "key9": "4hjWA7eqZxrXWXTHreJiEQFoHPemAcHJ9Vw8YV648Ue29UFLh3k5ET5G7BvCEYgUiCSeBRQuTnoJkdjFEuP3ycNr",
  "key10": "3UaFuPXJ47N9NvWcpKfEVJDKrCseKwQJPCQGMwikCTT1aMu5yrMz4Z2uBSMrmZLWcZk4vkcgWTpCEQeBjRvoFdy9",
  "key11": "447vQbPaXC7vLEyWfy1iNYndccAJZCqijcm7paiQo5u7c9WqaAzmbJ7kawTbwiWWkeJeUSJ7HW5B6KNXgWyFf9rV",
  "key12": "45zxqmmUUPuj9J7Zo8qhytVPU8Gf3tqtETuW5WRDXhQuGDkR9idCoyQEAehR8JpP3Vhb6pTRGaVn2G33DRjrDRTZ",
  "key13": "2MmKEfqc44Rsrr1YAi8w4pjPmtujiF9Sbe7Gqkq9WuaPeJBSYbqTGdc2DRG7JYrgcaYmiDZTYbvfggj51UKVLXxi",
  "key14": "dMWesVt4kwacr41cuXuXp8bqWJHwjHn9RSGxAjBKnKzFHWvdqhJwTVspwUReouQyX7bSB7Btsv5Ca5BYidecXPt",
  "key15": "5kyRE5z921K6NPii5xGp4dYAbvCN3tKs27DcFCJrKPbCn2ibZJnQvAmDHsupQoKeDk64aYY2J957esLY4jHVATNS",
  "key16": "3xu1hsxQybsLbqYcuJSqYSp3HC2SPqHqd8w9uwQKToPjG9NRE7wKSTxNXtPykzWuaTEjkGrQdJbWnTn4ncCzJbTg",
  "key17": "5YW2bat8qZ9Tq171DTLXtCuQF8pkpbYW23gTmrENeUnSxjP9ZQJHJdfnEiUX4WVjKwmjeW8B5T4F4BThBgVyG4xh",
  "key18": "32AvUX71EzweeZgYPXCFN5AdYz8PMyG65TeZsfLo93PbYCGNztgYcqDY3vTWH9ucGWwXMBsicB3K2kBuEBtk9LB4",
  "key19": "4NpcDbURhf92kmJVXpM3Nx4hQNqZnb2WirHTiD1zMCdQr7VejCXrabgTv3coNTP9RtZVWKybY2Sydp8SmT52P7b4",
  "key20": "3DspLMWyMbxkrjVF6nwxcgcravUL8MpGX3pvFuybVXUmecTuqPWZWZbSbqzHHp26XWXQhdHbZPdYCrod83QQ9A3V",
  "key21": "4hg1q219XW6HP7cjXq5tHVCnRqpstxyySW2zpPLV73g25cLehyRjD1Qeh7DAK4jU66A8iDVconx347rgRcuwbq4J",
  "key22": "gNnmqCbZa31NWFsEKWyg5myyhwgjacApaX1HNfyoJTy63Dr4Fem6EzEXvNDRPzcH48QQdw7Kh2pQxysF74UL6gL",
  "key23": "587TSkdVMko8prbo1rkU1W4YqwW5bkb6oNNizQk6XYefF5YVoQ8tkdrp3rwg8buThvP7cDbmzefXhtTMSVG2zgUU",
  "key24": "5rQxt6xmcy7xR6x3mpZehyTuRLTtPpoPcP8ZYFjJKzS7wFHshVv8gTyEYPmV82C2YqhRF4d64Sf2896QrQvkb9N3",
  "key25": "CXEa8K37dP95L3au5hSuDjoGphrnU6BM2viQxM7Atuxz3GGWQfTN9dQ3qUtjJPHNf1nmv9q9hpfeSAaYZnQ8qz7",
  "key26": "2Tt7k8AxK8dPq8AF78Lai79mb9M53rSEEYuCAABZa7mrazCXXdscfqHvJQGudDvMVtpDAtEfu3qBegkzKGfAnUBU",
  "key27": "2KuS3gxfwJfktcMXLzLkCgtjh7UrvasR2jjbd9h29bwan91jF3ZqN7NnZGuB3g5nv8ZscfARntk49cb5jERxa3KA",
  "key28": "38P3Kof4yvZTk5y1ZZn4gPqPfCuXY63C3r5E8VWvVfLrefwMZ9x9bhG8vMcS1wKeEwP4z2KEhBWQSQSJcwAXPAub",
  "key29": "5zjGWd4nk5C81Hw9H2nnwa6ztjbKZzts4uz5Wzpfyt35CukHc1MHMvcDcnKJjRvDJqiYSSp3qEep6SgstWjq4ocn",
  "key30": "65NYhz8844EaidHFgmurWrZYowPAoqCdmZbTtx8aYYmwiGtkDR7Lrz2zHftN7r4hzEg5PkG4iPcPtK6ka9UkWxVC",
  "key31": "TXVym2BzahjYqAym1StQhCmv8oUjrgcePpQrZ94NKdXZN1CVtZDM5L9cNeuo4hEBMHbcibMq5M55KopdW8fQwTo",
  "key32": "5JWQMsR3qvDcudQdgf3SUYY5vs2EnBzdHEnmAGoNZh46mCVezE2Yh1yHcMBTYekHC6Sw6Jf7JZ8f1Ys1NSN9d6UN",
  "key33": "4EQxuGfv6XM3EJyQPCibH8Q3VZit8aGAkKXNvmXFdDJr7cqA6ZjRgSX2DBdmcPyevG2MyJfZ8AxGr7rMfC9JEtQx",
  "key34": "4F9Bn9iqYEH3cZdmPykwqrgcjX9T8vmwwbrGPX98b7NKBusBeygtWXH7EXTXmiatVZyJtrmh2T69J5GFGEpp7zcK",
  "key35": "URVu9odYw4S6nrZjrB5ym7AATN6zQ3JgryLQqJUSA4hWPRv9S2s1Wx2t5qVJJJxE4Sqtep6zvceoumV3bpnigBb"
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
