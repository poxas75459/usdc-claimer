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
    "EquC68f5MLaSQiCCNp1TwhikPpHmo8mhxd1jwwsGRaUBuuSf2vZL1nrjCCmdGJByoj7VsZzi9hoEYvMX2637Mek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KZSChF2A1PhDkj5J9VQgRWYE3zrvWAnG7zhf3Cp7VocQ9eRKb3iE8AA3rx9Hu83msMPHeWUjXdqLMdoFVNVYKaz",
  "key1": "5kAw9nunZ9FYepfdCzZSPpQbbKQfX7tesYVXp4Bm25aeuVavvsEtJ9epaandg9TZDPeVhedixA9haq37e7g4bDVL",
  "key2": "G99Z2c3N2VZSmGuyK9nPGdXvnTh1TNoni8RW7MAc2ntHPUecC4EVrjxDj3XYjfKEDPGpfNzcv1iLSTerbjgxT24",
  "key3": "3emgUY8PKdQM3z9k6KQvWcmBi7DTxMTCFJc6j26DeFfyishdxNhacNFJvyKb9AoSv4uK92axbnUzbq2nhq4SmvSU",
  "key4": "3vES4AeBA5dHmPmFgFxKURuBGzKZY571x6kpY3qYuG2XKvNpsbCKyuK32i8RjuSCdwzgs21cekyWsbpAofX7AU1r",
  "key5": "3BWbxCPHgammw5E8MKh3KQZkK6Ge3MLk6iafKqoQyt9buvKFoZ6X9UfSWi1ttZgz8ETxsnzK3h7mqQ4W38Kd8GjC",
  "key6": "3JgVpzw6PxhAYydiKzJ7YAERKiBDZfhQVEEYkv8Ez7v9hHAz5zb7SNR1fX11TQqDQ26dPLr8Fmh2yNLYx653Ugk3",
  "key7": "5Q5zc3Fgfe9Qd2vzFjQXqbiyRuf2LUi35bYYcgWtNQ58g4LVZv396njYQpUDUeVqsb2frFKcH1u5a4ravMb6yFMt",
  "key8": "5DTfRD2CSiWXYKG6xUSJDruuUuyzA7Wx9G56L3MU5WSeGCYbKXf422VWrKwhfscbgZBTLZCiavyorRt9QCj3W3bb",
  "key9": "32cqA77AMX5tKq9mpqxZEE5JYqySeAQvy9KCuTeoPBjcBdPUf6fGGebLBCXjmqxMceAmcL7AbYEsajJtZdGLy8zK",
  "key10": "5J4MWNd6AQP2D37jzGP3aG2wiZ3czGEpcPTFTEDHxoewSDSijA2CPop5MEfLvC4Eapf3Q4KCT3DntddYS2Az1pRj",
  "key11": "4WR11xCnEw14NKQjQGJAVaDNf3ith9qVQt32MR9qP7EjpvgPNqMJJZh4LdHAEz93YLcp3vzBLu85mJzBXyuaPUY5",
  "key12": "2fQjD2BzEiPjdqaHdu4G4qbRog5RnV9dW9PTydAbu7cKjh9MxHkYfsPjvGSPr381bLpEmxRcCnAhiGGan3TsXSsw",
  "key13": "3B2vZm1VgUE1LeUFFH4YKzY8G6qbjtpwpSNwrZzSBxKmULDziCGxgo6mLjqhf8CobRq1Cd1zXY1du8Uks6K3E4LN",
  "key14": "3J2pda1wk8x8RxNdeWPe7wS14QfF5rwQn9kp8Pf6wuJa4MKnmcSSo6ZD7dUAH43vijpuvgCVmsSA8tDhccHWQhAh",
  "key15": "59WSRJHTEzLkn7NRLoL1TEaiQwYr3jjRNTPSD91JsRtA2aYujVr65RKFUCNJTt38e71cganBBy536MdsQQG61mSU",
  "key16": "4XQDFPgQkkFUAbWMiHbU9KwmceRafKmGfJE1ZarJdyMh4NpcFe5HRyrTprF4CkANta8mAbU64YD3W8dZbsy74tQk",
  "key17": "2J48AKuQyYuQpDTWugjeLk73YnyADPsPu4XYVHZYnkhnbAUYkTBf9sFXCWkAN6k1qcKKvBpUiHAZ78EJ87WZvEEJ",
  "key18": "BSfcT63nkhrW72z2UCTjr8HrG7h12dpdHtwYvGSuejEB5GvnQ5DpYE3PsEmJmYjyjhJvXkMAo1YxztCLypG6ax5",
  "key19": "5usZA7gfR4Gau5zTeNCKRzdrjUaoCHMAAPxpFSKkoJgUHLjuaVqEuv4B181iBhFaxnafpmdZQ87RsrJa26JL7iws",
  "key20": "dqsYP5Tpp7A3PNSoRzBc4aYtgfwhTydYjfuymBt3adLQGvwbdHTXtxvm1ofMvnQZJVybiftijZ8yYYMzYqJqxk9",
  "key21": "5stosLbsf2R8TLaeCPLesvf7w9Jfjeva99MaPBpfSVgznUXVnKxifxGRGnea13QkHNY1FRf6PjdKQjShfJETTF76",
  "key22": "5GNdbaJjkFrS9mqnyR6a1NctkeRcgL7QXTx2EBjfKKFSvusnhKr2qGJoGPe2askQ6n1LrLFdHNHJ5ev8McvrytJt",
  "key23": "4Z2zbxKpAszcCFFMBmnUhfHft3DuDSoQEH6ztyFoiasA9swqZdnjkDbRNmY6hc6oLsn5XzaRoEYfUCBuh1HET1te",
  "key24": "4ZrhUpvFwa4taTPQKvS7etHNCrvbJvPMUPUN9RVjnT5fAuY1CP3bUozNnzEFtwCGs2vpPi4Jo1x7K3uppbHUuhJ1",
  "key25": "4fUAjrmHxHEq4cYmZZBDh2JVbX7m4LMEvY1CbPgazKxSXwJHmCbF7ocvDXjG1NBVhYaxiR9DNfzKAV4AJ79vu2vj",
  "key26": "3QFsKztRafvBi25y4EUmoEoP7a3hHC199xo1i9KmaPfZs4FDyzQCFQsmRVGQmVyL8UjmhvRmWKR7d3rJJpsE9eAF",
  "key27": "2ceuAktiN6jvZXDAYrroNqPmbvEEeYk5MbBSbQdvBBB1BQkhSZ1ZK8H7FPkq5Ypw56Wm319niFV6S555Z3LeNNv9"
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
