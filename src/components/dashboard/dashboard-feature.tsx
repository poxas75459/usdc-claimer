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
    "2RS3ukTJuiJkcUd4av8fk1XPiuFzzAaMD22FbGoAAABBCMM8iNNmP3Di8t1uUnkaFZYqQVPBGFzdBrnJ3QFZ5nNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CED5bLaZZSi3PJqEPGaA3wjWoiiaVyb5bA7wMiLZWpSZyCPcHkXzBeEbGkWj4mZpZbL5eWrANcdQ5kCCqoh3ZS8",
  "key1": "43w3mDQp9F3aeDByLijVNqQonNzcwaUwdpHYUf1MvsxYXY9t9pNcHUSvR7YCnS7yqRtjTqSEmfArJtJ5z2ZyrJgv",
  "key2": "3iMp5d9BqVmhiZVjs39VxvJ2EDKy8YBa9ti6a7AexdYvEBbLtgVWmCW7HR3scCm6Qr2GP9xGwm4gxb1mrkh4fd49",
  "key3": "2U7PWQAGoGryEx9ozEmyWeWkGnAkoxRsC9VvMyucHENu6yjWiQatFBQRDvB1PbHnZWr7iHsSHcijmtgYcJmFSvJA",
  "key4": "2hTyEehPwHDX6oefcVDFuusQyd6SwWwqPJ12pHwDnnQBW2vcbjwMXpu1wngkEUZLRVHyZEQQNHbFJwxjVMRjWfX9",
  "key5": "Q9Eh2k7EPmzLRvjTBFK98gWLEwquFhxTTZKgFwB6PmJJvXjXmk7jPECEqzfjkADSpKupEcFmbWwGuuFWRkow5J4",
  "key6": "5daefEzU9R8j7tWT5XEjMUA7svqbxX1azyu4kvnKUGy6MbsqSEkBSLiUp4aNoxEJDMtKCQua2jCRzMPtvCQQjof3",
  "key7": "62N6igxFFFvgUgicDXFkzUPvjrUHRbLE9U1qQjqkcEbGwtoSD5tqU3CbeunBQbHhcofks1yKcL14oH76b6FzEVNv",
  "key8": "qJVRMMgi4F2sZKUPR3DQQKmVToRUSdZMnXtGLC6Y3izeFkRrLNm3caN16vH15uzAcrX5FrrC6TPbg1cyZ9KA5in",
  "key9": "5rW4mX3xUJz8udwN3HDs2bTB1WyNkaYzkuFvCZx1e78XSTW4iS96wzndVJTbft3JKFNrZrqK3UfW4mrg3sYgN4k7",
  "key10": "5NUCyMChrmkSuzVL17SQhWcFrmP1FmeUAt5w5CFYNDhk1LwSfPvfHs8jrPeCULWsZhV9Xtqv4mNYrpHjpPVVk6QR",
  "key11": "sAQv9Y9tvGz77j36SYL2H317p33t5q1ExhxjeGdZ3UnC69ZCjKzN34hJGHGHe3vSX8XbtyK818hXbNhdocoJepD",
  "key12": "2Pym9XDgvxdN8ouxSNFSBcCRQcuJCUvAGvoznzujB3v286XDQufP3tL3g4HVerKGUuS9iroRJV1wYHQaQVEXdFXa",
  "key13": "45E4TBXwDLmvD4KThRiFJHPNfkGmYovW9eVjCauJPSs6W4MQg1GNspznUA9qVeQPsV5RY9YD1vjQ8herfrFgtcEL",
  "key14": "4BM4ahp9a5VsbhihfQQJ2V98u5MoFZPAjS4q3wFT37geMmzNMZsZZUKRCe1rD5LEoUAzBuSiE6XkHSykLd5Nd2Yo",
  "key15": "PYgAsVgYqUapTxk8d2SirPQ8P17UBiosvULFzjfxfBst3kyrEWxfZmwEDSQBikjGYhn5NfNZ3CmmqdVw4wRT2kP",
  "key16": "2ZeELDRaDYQqjCbtt1scP2Gfa35xWLSTjaJRRvh5JD1Skac7kWVCEosesxHrvQvqyttoDtnjjeu86iyhdvFXR3a1",
  "key17": "5y1DoL8UtXDvNYmyyF9NCYwFy1WKkt1AQAUjUXp5PtgdcWXQGiRsrXH7W43tEd82cTZnfo6yZ8u4GRGT2KqmCnZ1",
  "key18": "3XQzfPqvsvQkDzGKVuuuchakMu4bCCDGDw2We836osPGU7yUhMuwDvJu9qtkCDdnJrfmAoA7v1ugYDHjMiwBQEDw",
  "key19": "44tkibjJRw9JrQ256MZtv2SfvtXxuXnGdmo1wfvjTT3rE9N3vuhrSbu6SytC7sWJ2q1nsoufAzVny2eHz4rArUmF",
  "key20": "Xc6rN7u6xuVAoNbshY38dGybWNgcc6sLK24eR3p5f5t2Jdojyd5YcFyFkCeiZpbYzbrEDWKQxckG9qGTYLHe5no",
  "key21": "SivG7QvJJcMFWZ2GuDLSdJBFHkfzxQs21peXA222cU3yQFXozgGM9eexUMBZqjdQyHhBq652Jg1RVdhtEPwPKdz",
  "key22": "2YmQ1sRJoJsRw473LmaygVdTYCBgzNZX6xNqvyBr7A6eHgrx5DPMA7Uvkjc6ncZSQPj6kehHnVaUL1mPQN7imTBd",
  "key23": "3QLLryA8dBhP5ubijyC4kdZYLG7LHg2tAAt6wHkRzdiUdhGSkrky1zCedG3o1eBxasW2527by4KCFHs1sRXTbwAK",
  "key24": "2wBL2DWsEY64fXuDH3gcH5ayyrkdaoHYCC3oE48kcavc2xaj9wXuJ3xrP7HF6gBFWstVC6zuuww2KzY1ZjATLrWV",
  "key25": "4ip4whqypRGvFgAtsuihvZC34VYQJxTt2KQpXoMwUQvWFG6rDKLntVoLTRRvrWhkrVmgiVeMGueMq2Wa3CKcveHd",
  "key26": "43ghTMKDnoo1wMcoWniTzMN3cdW4XfnH8Zbwbb9js498Qvqcy2XZBRBwg419iPQHTAPDwRGYHWxmtyrocHbruwYR",
  "key27": "5FDFV1ZnKawqE1SLsSnjysTTLPp8qHUTonfBj86L3Jg2VtzofqttQGDjvR4XqLsAXQcRYBowpY5nPNdCSfG762hQ",
  "key28": "5MoNBWmhcwe9oR4in2qqNEFmKEt3xPAkDPHUYLbZknnNLrR8Ks8eLYADteemmCRtD56i3mUt1HVGSLyH8ipFcUh9",
  "key29": "3WPpcqXzatkLqMYTZXwBsSzkmxmbVyLwaG7h4XzZq2fM1URYpvuE29JhkXnzTTBLvPWKdeqRzXMf6Uzuh5LySPon",
  "key30": "Aa2bxewPtJB7yMHDSzkw8ATxRaADsBP5tuMTWfc4QQmdNgNpmiX4GzZwwSHR9RN3QM2Rw8RbUFZQMwSJNXtXScF",
  "key31": "2c4iizWVzHgMTKAJno7t1RWcxVCD4Ej97wTyWQt2VUtkVudiM9MM7DHaitbSTyCCVVLsrfSiQi8RusAtyjaafGbf",
  "key32": "3CiZMtx47tZ8xKhXwJbVQqPwyb5JVxGQWozFotLsAtWoVnDhWMMHhyLQn9Sb9qVWZKkQKAPvo6PyCCFVoQRkG7LN",
  "key33": "21jPuSWZ6yFnENMtXULsFUQmML45Yp1Dv1AAS8GMVkqzdXDcHpXBWLoXjtESxKhQqhhW2XzK8akVwaZhEkSoFRQk",
  "key34": "3toDpEabm4KSrSSnRmiKKPbEDrL6MpVmwF5frMtpDKEo5MjsmwDJxUU8E5WXXBTyLwuMxRvejsFsFBFP5iAE6aLG",
  "key35": "3b479GtupuWhnscquk3hxcwxARkujBt71crtU7KMrQb7sEvY7rnGgXxw17P4koeNY3n8SqB3GzbUDiWzSFbzS3Cr",
  "key36": "2XRBK36tSk68cx88w1HTcHgeWb6CsYEjhFN76JcTJQp8H6WGePnAAmnHYQ8UNz63TpuUWRDwBXuHmVYkjkDeqD3u",
  "key37": "5DMCS4ZPCyr2RJzDy1zhoxfhwRYe6XmnAU48gw6QEXkV5RsCXQ1CvTqYgMeuZRvt7v4iBjvFyrU1EAK8dUkid7HA",
  "key38": "3rkPX4Petp3PMFk2tuUjnNhx6DJ3TZzfx7MrByZXUhANhUTtFmwedWcFBhAmGijsgKDXHpGWnYeEU4GT6EgBQ5Wi",
  "key39": "2G9b3S8m57Tv9ppJJ1Y64PtBbhCp46fj3ZKNSpDjzz8925BbQkRVWABcGianSG5rZdPw9htKj8gS6xKVUVED5gd7",
  "key40": "53kjdCepTtuSyjk8YYdySqcKyYjmbfR9P2Jk4WQsRfQjMryXUBxN7ik5A6TUMBpGMXaQjjp7A8KnSdxCr7Va9a3V",
  "key41": "3xAoWzLtVJ1nVqCkAzHmiiBupMZgXe8Zegdism6uXcm4wvpNJ5sKLmyeM6DYtGE9wdmmJB8JbPNMPKmuAGDg8jqm",
  "key42": "2mUWRbQHXnKcYS2gXgW8thTE24rHMhxUMmyUkagn8yGRpqbacPrMNKpR9beuiR6ZdP3sEQCdLpF51HfjfEK4McHe",
  "key43": "5gJE8fBaYRUXETSCxsuNqKijee6c5TYmHMiCS5AgVkJssTAYpFEM4BFpS7F25eokgJ2AmzFfvbMcJC1uGvX8MeiK",
  "key44": "2rLzV6CsCQJq2duTLZPTr22ybaEmJqFnjUZq9RzhskgkHzLML8DWvMbLekAqQ2WebfvfjVCK7Wg3c7qgJtmB2QKm",
  "key45": "A8NcWSZeHLJpTKBUwJTreFi5ZfonyLLac6dwUnySiM9XNpUedGg69i3988qcRAyKP2HmauQ96jAnyvZ33gHAfaY",
  "key46": "5aSQdfM7pETZDLMPzuwh1Eqy52t9WK9EJHR6J6JN4sPwnCLw3BFHhCrEKMf2irnJjKW1pJzsYkLTqQf68y38zfTc",
  "key47": "3rKJoBcbr6GTT3sUhZy5N7ttygpYZXUu5EmPiETrnGLE1PsqjrKKhkAhwq1mR9FCQ3RwQc24j5JpDfCQcVpfowFp",
  "key48": "5JMkBjU1bq6AKu45jch2QJt97HtxWEpQUbL7zBQocWMyVd2VkfYNaJGZFkAbmTDi4nAytLcMgGnkZzvsvTvQoArA",
  "key49": "YnEmAEQA2oNQoi7TnsGoJGuNXSxDoPi9qkDJps7HhpZt1U7aBFXpYqy3QhdHLxFSFXT6A7VWbJyn5Gp8znvLNMR"
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
