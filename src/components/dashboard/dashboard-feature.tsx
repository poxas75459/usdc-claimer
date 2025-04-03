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
    "2ajLsGEjjub83Sf7EtZZoYNXycWHgso33rvjoXdz6ABz88P7T4NU5x4j4FfuSYGYN5S8Vy7DZDaN5STZpzLZA8RN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U4UpcrcKgFFF1Mu3p2QQLDMzKuoYQ5uYNo5SN54nhP5thohcxBf5dpTZX9tT1CsxA6Qt7J5oMUnpekUPd538Vmp",
  "key1": "4riL95Hdb4uBh58qgG9Pzn3d7Bd2HMqCp6Hsabr1XWyXycrykUMaEvM8kPW5f8yNiqao5oUv7UwQAKjbYTpqbrTU",
  "key2": "53w5gTrhCk6Ghce2ByHpC6tkfroqjXYj3cFo4FcJUpqhdGUXY9JF7dZkWKbsYjSu5J54QcZQcXXSzj2okVhRuu1D",
  "key3": "24rdBYdB3G7RnpgZmUrE5aFCzgLbs6mtYMBrT7dTRoEAFJjCmNgDasz4pnmM8uEL18tGfCK2vRyqiAKhS7ENVPGG",
  "key4": "4HbT981mSy2kkd5iKHwsykNCd3XWrc67MctvSGpoyK8Rak6JTwf5oAK9J3a6GeVVhMTqF32MfD3DVEGeh9HsrXqT",
  "key5": "b85mppDoYakT4mRZWZE4rzKgJ5QFgQPcRTP8ijNafab9UEDgYdsx5thK41bkSuMh6eb23U9vC4pjdL4m89HiJut",
  "key6": "Ks98nsx6zQR34ENhpTYDg2LjxjfLrGZJRLgzCrob7LHjHLiCAyVwezQ8Pfg4AeWFfZcXY1YZJNebfpdvbSjEhwA",
  "key7": "yGTwUxb7GpYw9zh4f9SrvTYbgju2uPfMd1SiYeLBYSyfuDcpvp94PaEvQbbWmqqn3V8RivqYwxe2nEEsVBsGjpG",
  "key8": "3VgCEidFNX95cK3j18WiDgDfpkqzuHcVpuW8y5SVTNbvZimBcADc1QQtGLiGFZGv1ceew9aDSTRjfS6UyGc4Wk8Q",
  "key9": "8NjcHhePMd9MXWFzoe8b692NxzLgJgeXiuezyuLgGz8ztryZZ6ybpgk2kaSmmMPjK4anRXmH2YtjwoQnhCE48QT",
  "key10": "575tT51Bwu5Ryy7U5YvG8NMEGxkWT6o9ZSXEJ2Ck69UdyzG7FWcTTpSu3ze65ZjwN5D6UfdoBiWUo3fanonQx2un",
  "key11": "4JCTpKoNrLJYomt1QFu2yfWcbc9pZXbdM74G911eYufTvYsStg48cm9NtsNoke4M5pXvxjPjjDwb5xaD24aCCq4J",
  "key12": "5RMPMtj9dEB9Z3S3f3fkBHyHNPDef1dorCrpEbPrieSYQkKVxUYCXfVkpZXVYMoEwkDW6BdtDeVqQcmNzaVgfWG8",
  "key13": "kDYVvecwCT36LKVmN8C7Mf2b3rLz3AQibtTzt9Bu3jSZTf6Byk1ixYi5rR9UUUoZAUGVfgoagQNHRAXj6ipZyWx",
  "key14": "5PSQcJZanxCSK91SQv5kLNjkMfHbsUtXFY8SzL1vbXuaL7z7k4ywVwx9zYVkUtit9QUkWEQ3cWoz5wcA9QbACEYv",
  "key15": "4C1wfdZ45yqMaLspKPpXrxHghyC2ajq4URncHW5YU4daZm8ThewyzigF5WACmdgkUrn9Z2XXS1wGetAjGiYGR8oJ",
  "key16": "3VjgQ2Qyhdqn3ufYDqfKc7Th2pavCrpKnexNLgzF2aTYGEnCouox79dT1dT1TRC3xo4csBCxVvm7RsKnM4RVtdQX",
  "key17": "N4jwTL4nitF6u7jjxhynZ1jLQdYWaEMavqCHuSphDGRzgPYSpbvwAXi4PyucAxVGaR1avkkwkmd231UBj3dJhbc",
  "key18": "5pnZYrBz7gmVrBcnibS8sAM2GMHg5PZsSBAtQTMocZjdHXUH4xE3AjSTnxpchPfMFAGQnXsicowcqiJnkcisoNmW",
  "key19": "4GamAXymH5x7595x2L969vP8e96HKjz5Xg3yfmyXMaNqjJy6mYkGBJex4Bn5VCZqJan4MabKffzuAkmDZ3tqdaT7",
  "key20": "5qjpFStE6LuxmTepRRZzAH1oV8hZpoJpEFSE4NTuLXwooSEvQXAmroPRgsEr2iXM2wBD8BSM3pFMueTRMtiv6tbe",
  "key21": "4w62kvbEj1YJhQrbAXZRzLvyDSFQQZ93NkJTWdNrFUsKTTfiPfbBTrrK3gWSFMZ64UYqMWao48UyhRBnXUWqBZCK",
  "key22": "dV23Dwr58STV24cKRTtv1rNXT1YAWfgprgTS4vtA94jnp4apsCsUuuMWxoKbCh9PYBD5yCH4RJ7u4NuVPPGk2L1",
  "key23": "4hc569UBermq83PMrXXiE9G9icoepa3Y926SkdfPVLD8Wjk8MUg31w8TM3Qd9iLhgbkg92N6mgwH98y8rUMPGvNg",
  "key24": "24DeHaBuW8dpyhay37xXwZzJ31fGcfaxL64H5RX8RqLmkJNarJeiVMRCm9yzUfwBfP6PGbSbn1dL3JXGZcEkdT3T",
  "key25": "39tVbWSUo7aJxSKogMuZGmjQ48kXCkuT5SWmJtTr1Y8RqtgijZ1twEUCdL6gCtoAXsWkaWjczFezJtdnZHK5K1hZ"
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
