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
    "4MhpKWjkfTWSQ8fTdaY2T5xkkiZFiai3G6SQz2Gxrp29pHkChMxcWDKCzh9q5L8r6ap5yZvMttmDpTRSKpLVyNV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owX85K1Msm1sq6L2qfq1xcsPpKgZowt8ce1sAeVcoAWWW2ntq1vRmk3EUGQCGubEVPBtRZLFJaDGPnzWFNpcqQL",
  "key1": "3NvKe9QWZpfRgQQmAf8zcaszzfqhNpChhjAtJPznS2fJaWkRsdELTpT4n8AT9MPH6VLzreqYjUUjzMcCrcsVvSn3",
  "key2": "2BDaCLzcTSZfRLDm7r2pBozvT3TT3K1dK5CNQJPS7WTuVrXkubRzo8Q2xqLyGQ8jmKHbqtWQVQ6QAqtexq3aLDRA",
  "key3": "3oeN2opnKq6Y9sZM5Z73UfkWcqcmBLLjM6jafBMcjvjXUVuhv2yUx63hJQzvJR44Wbmhbh4Du8HYGAj1negJ1zCY",
  "key4": "3XiwuyWPbgFGZccweweCsaKvV5ZnYwk3SBSebjWMkRXugDZXoxduDDEKoVNnnpXrzuZKsDaEBPwemqPXN8V4vv5B",
  "key5": "2e8sr1hk6oWfdr6bAXRZD41uGuS6JbqBmsum5wZ9E5o34VQYkBEazFj8pKby9aen1Tu3V2FAx9EMRP3QRow3qf5u",
  "key6": "5cH5qmWkxUTct6xoxNqBkpqmJ9ob85SvKgrJuSEkjp8vzonY5fPwNuMD1VBng3QTyukt33UDM6ZYgtUyB5VH5GvH",
  "key7": "5utnJB6ynRfEow3bRiPQpTfMpYd5YBAAQCiu5Xu5D8s3YS93obwWdeEbYRdVJqcpvqTt7eJjkyUMoCjqi9u8XATL",
  "key8": "2EaVbfQygc9uhUq8EjCnvmY72EcWrXRuFXCe4MtT6tmEaHCS6qoVaYXk3KGgxgVWjej6R6VeWteT7z4KjcZ3YdRf",
  "key9": "2Hjm8M9wdgnfoVC5NGmii7kMk6cyyPMHiPDcbiDx3Py369bdZZncCRwFeLKRP1BhvsXL3srA8tMaWNuC8Cz1C1qd",
  "key10": "5WsuqZjWerN7uNK9EWfyQPTxc15C1aBeRfCAavn2gzu8kQLTmQMFNqShWhaTYaU8i45tE1vs1FVVbWzzn72Fu37P",
  "key11": "5FPnVYeVAVw2m8foRwsVFTCS166krqpxg7f6X2BZeaig1MZyebZtB3FRSJzYv6jAnEHBgrMsXhrwvk8aEL7qNVNW",
  "key12": "36TYkZrCqZptER17zyydFxTDz7wMn9YKk8J7TSmC7A3mS8S9qjnv975G3SWrEzQ6RXeERmyqoYneguuDEC2TYFja",
  "key13": "1wRfdZSJQejXW8NrNq5zwixZTSsV8TGoJxoWpNNe5DmgKfktAqYkHHjRHXrAvSpgdsKYuixPVLJznmhHhB6eSLY",
  "key14": "5Ep7fmMEuU4br5g5NUB13UodgDo32x6si4hb1UhXQHXkh4wYwGLg8qPDZHkTmXhCbu3KxFPwb8kx9xDftmBrabos",
  "key15": "2j5reeiUyKQKoL9WbvmfL9RVGhrgmEvJeAuHtFtNgKw9VPhjeEHKtrMoSDJe9XifB7LBnded7JP2R6mkfcj1TR5D",
  "key16": "3kZNgyaiRLv2tvayxYc2pkTANzHa7BZPcSTX5MB6wGHg5RpPmJGRKDszKXNeG8hrrSZnEgn9zeqAMr1PjeBZBPAH",
  "key17": "33ZTdor7VZcwYLisrokaeJSU7MkR3SGGdbJL3sxiJXHpLvYmDb1B6Mmc788b8rHMGrUkgCKx4rvfSv84tsCmM59w",
  "key18": "2iv85qYPirZ2Y9gZRDPxCJBSz7kcEtCJPQynxfwKwd7HDNqHpHFc9u8cG3zkMugoXRYUQ8LycT2EQXDuKdVGhn3W",
  "key19": "5iAn5o7JbvmCYJpSH1UQNoezwkSL7pixDRW52MACsKVX6qZ131d9ming6FENGHLZB74qAwcy3Yhede2HeR3mQk1S",
  "key20": "5Ss3PcLusTkNH8F4E65wqCtHgLPvTTMo2LK4Up2r5VfJXqE761W8E7fbwxFo4mFNCBriegaPb3Ge7NaHNRPEyokc",
  "key21": "25QkSYyeJtefrPXDQwvRKeY3rqzi7KMa3zWxENf2rTVPUuxuNQoL2QtyR3spALcd4S8P8WfmBAmxGwfSD88WCP8C",
  "key22": "UuBpuLDYgLjfCzHwhBeFsfFBZJLcUzLdnbRwSjXZt2TuQVhdPz67HZQuTX8Q1cAKT7LHK19J647JhmdJbfdvnGy",
  "key23": "5cCFTR117EjQBPjrix32KyCJSU1T7e3iTFWhvfwUy1T3fg9rQLrNL6j9VDn2qQvQyToLzVCAj2wmzt28HAXZrL2P",
  "key24": "39kJGQMdJqRJ5YbfNumBvPfGjaE6azXz9ZNrmiRKWvku3iNkJCfWNHoJqKPPM4hrqVP4daLxB9hppF6fzN8V3Qcz",
  "key25": "15DgUML55jY4aN8JqSzDQYoAY3cuyu5ZUP1tZjSzqdaXt62YPWzvKCfRJonDkvoory8y4GQNiNfEZejtECmNiKx"
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
