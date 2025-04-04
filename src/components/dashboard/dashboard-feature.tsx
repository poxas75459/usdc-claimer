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
    "2Qqda8fzA4ZWKdmDLTKHdKL8gxVqm3M7AQizVp912hWN2yFyX7YdkCQMvijqA4LBgRbLwVz6hNVHBKuKYa2Pec6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SZgYurRqrXyA1nEdwi8SJ5sPXyH182tCD434RuPE6QVnnp5ibv925aT7BFkEWPBKoBQQSnm1XpFtj6Vg7CU3pmk",
  "key1": "29HTYSjhjSp7ejQmh2KuAbaCrdWyFzrBK8L5idUFHcRS7qKUViA2u5MXy2vtUQg48SUfSM9auxSwhocnTB6Lsc3V",
  "key2": "dkcugFQ3NRL9EidBKLZnGtY3KxVNsXmJnLNeTG86ih13Hqw5QjvuxKEKUJCWvgnTRwBZyQ28fbay8U7G3QCxG3a",
  "key3": "Ncnhk2yHcHKEX2CjteU1Wym3yDMTbdL8BT6qrUZHR1CP4pju1zJCjHp6AP3CLH5URMLX6o9pCu6g5gMbUiZtp4s",
  "key4": "3i1JRrRa5B4354HE9492bkS263U99dh3NBfnAYXcsPU7hGVZmMzsYzkzjtWknZL3Q6HCGUtL1ywPEy2QfA4Dht17",
  "key5": "2xdonezp1prYEX7emwvTa79hkMwj8CnuMHnC5aHpfkLSYMAY4AtANybTrvqdkwAzSoKGUsV6ndqukK3znho8mXZB",
  "key6": "5BX1vEfowsUyqqGTfpRmh7U6G9mGV6fit2KDQgRGQCUH8yivn4C1gBZEAN1pExVfCJDqe8myStcGwULHJVvKwAjA",
  "key7": "hGx7hBCwgCYDnz8fEC78X3uFeXbzjTYd2KVee6ti6YBFo4UibC1BBMweE74Ef1HyTpssfPYdcQktmmRMpj66bfu",
  "key8": "2rjNAnFt6U3k4D3ssZ56a6ByG58QX7AKagsvV3SzKyduv62dghdQ5xceGkQhCzmFGEEqvFnnuNpT4Xeb4riogou9",
  "key9": "2CoVvPdRV2Ah5eD6SN72Jp6YAiosYQmRHoaVUpGEDrYj6xZaA3e39PiT35wzK8xatH5AtD9AKqVgVy4xANh8waaR",
  "key10": "5SuZFwZjmfQKjeb3J5dqsoX9PFJ3iMPCty5DKaD3axaASH27eXCrArXFdHpDKECAQuHSdSp3oPqVRpunYeZzQewE",
  "key11": "2jnRz3Hqo1TvCmsVGTNHjj1mwzbWkLRn5duoxGohEHWcEqH5RiYcVdTKaFdwPy2Xbb3NUwWLNgJXSh8rsn2QpTUB",
  "key12": "aucgMbB9aupSzkqKTkRLfVA8eeQJzCZG63aMau7n1qvUTGay8sbXfcbc7Rv819WuaybovYQvHJAJnQuJH9BBV8G",
  "key13": "4RRv4x1XhapCCR3AqJA7A2GeecaJmx2ojMKUcrFvS6qae8AqVDznYbjq3DNBM2fjtRv9fsZs5mfPV9Qd7rydzaRP",
  "key14": "2mrPgbDbZpTbA7V9ZRChTn5zr9yRKKsfpdKw4ipdrwkaP6bDyiCk4gnxBHP8Eoc9iqLAepbSkBLYacV3rffv3PLh",
  "key15": "4LEozaXiAV6fjfrXTeycAcDwA7oUmx6BpHhZfk6HBe479iKNKZckjxaKibC4oWPBWpAfL2tySaz4z1mcFNKW9koi",
  "key16": "2ah7VEsM3DdzHG57vk9GeyBFJ9zPCbtXjfDGaqVTKStDBamakkd5zQ3FfuEEg6CWNu6VDvPUUSfT7oayJP8b8HEP",
  "key17": "SULxipVQJHpM2aWh46KXoY41YAwJ4nhcVZNf51KBSttzEbWrFFVTBeWkW4KNwWbdiyocrkBp3QzhKjAdo2kp8AN",
  "key18": "2gfep97kxjMSo9hVLNEUtfuu9ij1RQD57reMVA76DrDkxBqfJXzw6jGsqUvnuh4uPjHgJ4nr1Xh54aftH9mhTe62",
  "key19": "2wZueYiYWs8kwXHSVTukFcGXCJXsCjhvHbSCvu5g6xLfjc5oX9LCZgtveBdCVU3cCsVDsNV8M3gkXCTs91poHbK9",
  "key20": "61crMFjUSSMUMeHExeXY9MKgjWG5LVyGjibrTkvo8fV9xzkZpDdwuHrt5GSfy1LG82cZaBPt5DVRepjHt8A9VQnY",
  "key21": "3x95etba9opNNziP3X5KiqHP1AStmaWcwGD2BtDfHw1Hacx9vg6kh2TAiDLLdamjhqwThcLHaV3cVpiHLYogxgGv",
  "key22": "2D5b9n4eqGLwUdEdBA6EfyGrjiEXn4aadmPaEbXubWbJL6VEWKTmjD5iDDwyBnrB1zs1e8uhoz4og4gafFnorGHg",
  "key23": "5JqJ1Q1jNR2PezgoMwMVwbyBgLzJeVd4yg4uDj3tPGDpc597Fim4JexvEuo9pyohy7UgebtZP5vz9SoZMdrpCSqA",
  "key24": "2ifHJgFwRC5WUrVvXiwz9v59rataLPd6JrCB2cZywhBAGVbJNng2Gr8ymqEmCUTv8Hrqgk6hpbHcmyUttMjyVDed",
  "key25": "e78rNgdve158Y7DqJ2CkTv4qJGKJKaLj9FExaWp78xmujuX37Yc5nzKSCYbdtGjiEqaUpUAwNDVMuqvTC9YeUnr",
  "key26": "64qx8NHmiFjHpHXwP7vJa6Nrwiwory41XdZ65iqumekNGwYqJzZDUHapB9ziZa9tExYYiK53YM92dTyXgqSrGGM6",
  "key27": "Uacazi3M9MG5n6ZY4WtwLBRFQ3vzg8auMXUQbbiwpbDYBW2GjTFgkT4nTkptff5xoDmeeJ2qZWUtP7HaQvzhJUY",
  "key28": "4YnHKntRxyqqz9SKCdRcUVnGgcJThg84SLCRT6b8XjUVrTS3e7iF4YbqNHkivcpLNjimo5YpjNd7wiLHieax46m9",
  "key29": "TkF2ykgqEyx88SwoPMaW8MuJmV5VhYuW2BvRVPmEV6LyBH1vEadPAF9R4V2aHSaEnpsyYCMBHMpuR271HEnncZ8",
  "key30": "5od3bnqbNrTB9nAAC2Lam2BxuFC3j9poRZYhSmSVa8As3X9xR6of3eZWLbYkhgMTM4pZDWkxXWds8zdGEkhkEidH",
  "key31": "4uG1PnDAYGmh9KCh3quECyaN5h8FhWZ9CFKTkTc49J1EANU7QmYQF38RP8MuUYGZX5Ygy9c7FytLBuRe2ydRTxSr"
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
