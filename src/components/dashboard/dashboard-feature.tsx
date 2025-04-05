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
    "3YrhFynEMRkJ1enShrbqYWk8bFVop1nZ52hwCNZGy5dWtyjPbHRuxWZ21oPm6dGJsipfj4p46B7Z5PAfG2knGs8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zqEFak5qAtLmvwP9E51SCGC31Dxj9mfhoXjTkATAFLBFeicV113pZsRb49XDTSxkUTxjwnr7vmrfNRvJQ2DyfBh",
  "key1": "4MtprBhZvyWAX7rERpH1Ma4rxDK49d5QqCiQQfUewijoHT6cVUmSmrivvphybgNjcH6LBTcKSCBoAPzHd16q3sFc",
  "key2": "5Y9AZ4M5GkDe3ZhqzqChyaCGVER5kLhkW4ntP3oJHULJWcJnWhKmhvqsruGTNc49cqohUQ6qttso3nAHc23nZiBD",
  "key3": "5s1i781tPsxqmCqsHxxHKXRvFDPhDBVqhcxJHJ9BPB7WEcNMNWYaU256HKDfhGxHPqwBSj7DWd5yMqAmKj4p1QMV",
  "key4": "53CMT32zQT9AaMYfhMoeiWtGnhBUS77FicnjmYWikjdRPgELrdHrT7Jjz5vPknhVu3U4qcYahaooz7TcTGG8UabE",
  "key5": "4baCr2hbxXpJTx5M1dYKQrZaRYkwiXprZAvkaHuWmup5mJbk2WQKqowyE37N1bMuMA4s5x45t6Bpv9JPnWk9gCJo",
  "key6": "51JVvyYQfeqQepuP1ZmKnP5Kf1yvzuvE575dMz6yez5JdeNpoHthtZKsgGEFBJeKRTgu6RqbqYN2VpCatTdTGKH8",
  "key7": "2k3RkBhLJenpnt6RUMM4ya1mZNMXxvfiSWq8RSfGxcWX9dfG5npfpt4jkv3Uo3bH9FH7n4f3qp7SX46EfNfZ3jdU",
  "key8": "2i43uEse1fdKVt8i5LE2FccjTAXLE1EGAPCHCHiHMMqvJ7rRc9tRYMoKVbDvHB5uiewZBVZX1VX3zeqxxUYNGYAq",
  "key9": "4z4AmZ3qMp7UbwVekQZvtpDZvGeeQRNbrecbKPykTMfyEaBneKzh819Qw1kGunUMEiDpLQQKhPyotzdFThwEFN8C",
  "key10": "FPe25qZWdsGD4DYA3LPLL5aX94f5UnP3561YG958ruhLnzuKffdqT2JTg3EP6ePhM9JgyYaVZZ2Nv3cyW9k6zAB",
  "key11": "5WyXfK9xFJzT3s1gngDmshYKFDrtoDCKMufqzfDt49mUF4YrZDwPqkshHAfQcQbTwARP2zj6g8oPZ4Tzfdmkuo4D",
  "key12": "3DWSfs7pjN6k9ie8NR71DwAxqrHw7jeNsWD2wL9zHjikxqWrtfJyhRHXL3C6PjSPj2gdqzCdv7PjJXhdmFsGjkT2",
  "key13": "3hjEP2PeP8XtkrnXVpeWFoyyJr1jmE9Lgkn7iA3qQu646mbj9xE5j2A5qWemGUU7amLRvEAReriH2bZqwkx4q4zs",
  "key14": "2M6NazH8U5LJgnZPCYe5KT2X8PCfuNs4YoVjRMaES91dxRkfpRyc1NgKEr7RmKU6fricj34hNW38PvVbg1zJSeqF",
  "key15": "4s5DzZepCkP89bvhLRk1LfF1EL6pCjw1NDHnFYvdGYfcumZFiLJTbm5o6pbyJBxyfWLptdJU7F11pwZEpX7xzCiX",
  "key16": "63RiKMgwjoEEhtmDjfGSJkzM8V91wE7U6GrHPzYYwaeDT7yeGy8yWk5PRx59g5stQdC5ZbAoNvt4UjzLp84cdk2t",
  "key17": "5RcEwgw363DH1AM4MRW6axVD6aLmEZKLqSt81T5h9LxxwVSiJwVWG8FHCckaPD4gwmws7iBBTwMXkxGhRG9jLNUr",
  "key18": "5BXoewvcV8nqFmm7GH29WWRkCB6yDcuo6dotX1Tb3ax26jTfdJ73hSgBxmHCEiJecUYd5veKNTuY3xb65Uyw8BW5",
  "key19": "4Vx97Wrui71BYSSyzK63VrBskxi7iep7WXazSpa5ivnmXP5nijDgkFt8VcFyPpjYvu7JdqPZrDcTwkzL4yaCuSY6",
  "key20": "kAm1BefXzHaZK8TUXWzPWu97ahadQLqNJYhoRd7FXgU1yHPzvFzdgkyX55Bnpwk6BzNAcCvzSFXnwtmr9zXoJfy",
  "key21": "VCyVyQxmUuCGFzr9j2MMYY9zJz1s1enMhRLXCdP6LXRWPZxNi62Z9Rg1qtoZMLLtNLi1bBESpNwoUPhmWNowQAE",
  "key22": "5VUSRsqGkRpyAxbv7tyeX9v6VvjGS1AeGjy8pU2V7dv3mTg4grAmZ1DEQYWEhgoRe9mprg1QvVsdXPdENhKkXox8",
  "key23": "4CmaV1PytpyUiirNdouzx2nmoK2PWtLJDSfkYiibTK3kg3nSRKwCHMCpePcqtGq26phGX16Cfx1cVXmhism2fYRi",
  "key24": "3U3dx569vbNbvTZbSJcphrV8dUKLDXa2HzxX77fxSqG33ad6SnF5RfTfok2qN4pn6Q6XKqa9TUGFhC3wEouv63q4",
  "key25": "44kxpjfY7a38KCwcad6GSKbyNLeFG5Z6Z3dZBu6Fa3K6UYA1QFfvzf4jSbS5tfuwQa3D8wqt882LVR4TeSMzByrn",
  "key26": "2PsCcnYVZk3FEVXhPDAhQ7DxL5mo4fY9hden94KxUuAWvRFLyAsJbjoUHW53y2tCV9KfUixwD4tUexh98awcZtwN",
  "key27": "4yWQxdCWoN522ZZZdzKc2hKhRoQGkDphHNm6hy2fjbvFi8m4HpcpncwpnPEsQf5m1D7yhMqrPiCriQ59zVbC4JiF",
  "key28": "4ZWDwB3UkLZcxFTPtGQ9SE9mEFzRiqGCwfLhr17HSdwTZSEFAT1HKzPK48mYQVQCz9xvMLfUpqzx1DeENj1xRc54",
  "key29": "4oBVoYU2ktMwjnqJ8jMmoDVTYxQgEERSNFP9V6U9G2A965wacgpoKnPBs12M2gb2XToawKAUNo5CbQRmXj9QLmXn",
  "key30": "2ksnXWKThEjKN3tDKQ5mVQm16KFZHWKgVwQ5nNH2dkRduBYQYCNdXZgYgrE8uH1s8q8cBpL76wsjDJpp9BVrbQqa",
  "key31": "4VZvu64bFJXoXjhREUXGXe59b7uAizg9u5PcGLznwJp5TErtjdiu66831yMRy1NLmtxf3UfaoyXnVYNLTDU9bLTn"
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
