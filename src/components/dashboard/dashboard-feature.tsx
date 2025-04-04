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
    "3cr8etGjNSsPqoznoJ48YbdBt1KAPWX7tgMuTX7RXQQyAYVJsTeYA3ybJxD2eymK646sBLjdJrAUCjNFth9yZbnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "679XnKXnzKytXzaFhaSseuQwDnMLvpi7kEn7FFYpREKe6ewdkY4hdWpxNjoGP9fq4osNtZrrAk5H4YyMBCamjbaS",
  "key1": "8ajhqHEcCXgwZCo2MmFdPg53dHmNzUprDgBxNHVZ5BuZNxEgqQwQTBs44GFcXNNJrimc3XeURrgYUkPBRFcuHaf",
  "key2": "4PSipxyAKziffHLQ2dy9PYs66N54DkAZRZfvbsixeFysDDQXFug4QqBxRX3L6TaKHKfqkYz9hGrVDrEjoa369kyt",
  "key3": "7tPrFkmJBdumJ8FzLYPi12PbepknEfPEvSRgysuMrET7f5YmNQ2bYht8bwbbju5B7KPos6FDLEQjveLim2Jo2QF",
  "key4": "4crtW458ug6AboYGpyj1ifnx6wUjDp5KJGLeYoXCdu27D7wSz1xdpuEh2CTW22Dc8moLHPBDHZZpodpXP4LEY1Fk",
  "key5": "3dpCDwhibxkvP5USxpRnaLJitzHkJjsGWTW76GYPkF8VAZyp6gYNa9bHyoX1vefeuQykD8XtSDYhwYzVYX125DFM",
  "key6": "3Vfv6tbb99CcGwUdwMLtgg2tnG7JLiU7Cv8QfVieFyNNzsu1rHFYX2XAjZVagVjBQvBNK9JX71Zijbt9G5Jt3zeL",
  "key7": "rkyY8fmQdgShkHUeng5HYGshcqWDCSAroa2YTPvjSdAFpj2J8NxVQoBAAgCuEA8ewi32qA4PjnxvL9iBKhSP2xF",
  "key8": "63GgsPQWegtKwcSbLwJNah7nLi2WkFZ1hojY51Jawuo97nbTzDjTvnvdcJ4vk4Hj2wDE9BsKegtbMAkBz5HDVjf2",
  "key9": "5ExuLdaUTB3baqkKh7xsaemk4CM3qzp6z26T7KSMT6ZRcsXV3LbubBf7qJZWeayhFwuytcgS1rnDkMKeBAJGibwc",
  "key10": "5CALQkDuw6e8AAvsx5BLwnvpTAst39XtrDXyZLTv1wQaBmpXiP3wzAvDEsLcUtsWUDWkQ7kgkk36pb6qK8QYR9uz",
  "key11": "4YB2TRYARkuqEEBTjXQ9R6MtC3iCC9zRYk8xGEFyDn9Z7XidkeHC93XtqzFPvaGzQYYufwbJbbQVqV16B2JUH9Si",
  "key12": "2U1gYfN38D5qzx2KfXmbRU7gAbbivW5htQ4vyZ1ZfeJLTGFAiXSBu4L22F2kLRzDAyhhRj8nksnjbyM9AsFLu1fz",
  "key13": "5TKj2h5NTMm2eR91pBDnmxMnWJYkb7YBdQ7cpYPSprq6Tgr23fHaUE9UGJtcYe4Go7PXmciaiGd5XW6bVNTMgFPk",
  "key14": "3Lp1cByw7Xz5jXerbWs9TbS45cHd4S7FoYWqwMWNezUahbSyMCVa4fbZN4owtzynkK6EK2XU1VtezppCrneWrcen",
  "key15": "3QAwCJ3xYBXwt2XKsB937Xq4GXy5EsQzPszQf4417BUkEwNeZMNpwUvg4PZcMZG7g4Zu6z4s361Cds1eMfAYegtB",
  "key16": "35q2krs4eXoZpoVRbp1B268rVpzJyeWr9LP8iLtPqxBupPrwetZZzdstkbGePAHi6rogFrjwLqfRB7FyHUWqFs5h",
  "key17": "4jWemUocjCmethCg8ke6mfomuumsrY3FiMY1zQhmx6Kin8aBBMb8ShMeSdtZvgF6jCAcUqykaErEGMLgVeCf5Fwx",
  "key18": "4PGJpCfzGKZs7dcLYNAf7eRKBPAgxF9BWsoNhVDC7CrV1Jkb1n3yF1gtEjVEB6imyz8B98EUC3zP8zejQZUmdhFk",
  "key19": "279HbDC7DHdp32xdMZ4ggarsrVVsWV1u1h27RN2BsYFUuVLSFHGm7BAoASyVHinBjTpjLX2tvyFrWXRNmdQiUB8h",
  "key20": "m2DcNH1J79YAJuoRZhPCfJcRNjDCDcMp3vbiBXMuBZ17PtGrhyE5UsTdcqaLY4nLQPj78EZqJwdQS8mE21ZcM59",
  "key21": "4gHh6AGwNjYnGW8VTkg1WFBwrMV48b3XGyfVB4ZBKigETMuDnEMhEWz1LwKJEg3CLhWEqkT8RwJnfSCs2AYMaKHx",
  "key22": "4LiXXi5FoLUWdRUTpCp5w15CgvBLoTMQR7oVxMj7Ma6rBd6is2KgcLabWCQfE6YiBkWSFExDwiG3rFJqUhFo2kZN",
  "key23": "4e2RKbG88CZRPU6YqUgnAwEtXEEiDtReeopmKXEhRvDAtoPa2Qp9LcfEoDeCm91MoDraytza22dGdm6BMXGtVrQc",
  "key24": "5rgqcSP9p4TLTDxDx2pG9r69QnHSWjHAdcKksmkNbFif19QS7Dxo7vP2R72UP29M16FUp2uPG1vuiLWJHee82i3V",
  "key25": "2oekZLgf4Gf6UxWVPEoaNbin7RtPVYFQ8Xc7VWLq6Ub8mfv1ZY4h1uFRXAknrdQ8WWX9xw43jcv4c4MMTDxPDQpq"
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
