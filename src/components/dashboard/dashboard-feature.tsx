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
    "39f25aePicLqibx9X3HcEJi1n794dX2GZDZ8WUaimn52qUPAAN5VLvqG3jwc4dKhPLeih9Kk1E7JnFxfPdYD1Lci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNYvRsAXdAttKrGzLeP6PoET3wZpC2sqkwWhsGUXqS4eW49wiFs1tFgZT9AgQuocAQsy4WppKy41VtXioVnb1Ly",
  "key1": "cCB1Z3PyemwZqQ6AkAy8PMWdCzndjP4jgrevwUspZWxw83fjQsu5qKjKnucZ5ayiWwGB4NcznqhXxartg8KxapB",
  "key2": "2XesjB9w9cv9Nkx5DqFNcuzKXE9wPVzpMt48X4pHYHt3DnxQFGNZEzUJdgvQj2DhGgpprsp34KTYoPtGusXdpVCe",
  "key3": "3JqTtAtssbNfkBLBd8bArjzBzxSo6v2fKkYVqiG1cJrZpqCZ2jh8jtYN7Dvfv4PKa3raqGnhbRw4sTtzfMoz8Li3",
  "key4": "4xb7v68pFYmZkGyyK9fuWApcghrAgQE4vDHDwj2kb4KgjiQd3Nuy24AdJ45fpmrZtej4s1mSegJkF5jy6SQtdpBo",
  "key5": "Tp96ZhF9uPCP5fkHCy7LeGhoShizovXNx4dxDatVt2dEmKCUp1Sp7n2No3UdxtBouneVacqMrjiKvVj1uMNoECk",
  "key6": "2hzk6EH3FLxe3mvS3yE6DRqV4CpkCASeWZUkreFR9qs6LD4htSgjBG83WuSM7zTmhtT9Vb3Ckpq8vSp1hPfGx8s8",
  "key7": "2jGxCGKddVupouumJygezxw4GhU42ySoyiY9peCXk7X7sixuakZG5G8dpfEuPCCYSm8xUd1udixJbphWs7zBF7su",
  "key8": "3sQXuTUpXyoKoqNFddVcLG1s1TzEbnEx1ZiejTQoQwS2pd33qRJvH92Hk8Mjk8rPVrHsPegmgvcSQWEqRktVCM5H",
  "key9": "4V27bQbyHQEnFsxdVuyKegNERx4g4S1Qeezf6T2i8i4StvBXxheqaKY447yDUJFkevCdKhnK3dSL8aLREq7GVTPe",
  "key10": "3Tnwcz63ab3woAEp578G95G3G6xBneUHx4beaC1H4KL5vNd8cZhirpgwUwyWHU5uzYLXJhXSQCUXZJGQsK8d5vhc",
  "key11": "3KzrKY82TmsMj1Pf4qhR3xJR5t8Vca7j6QBJGTL7MVBiBhtzbMuTarxtrKt37b3HhS2rMVxDwSwCj5cASmoTH49f",
  "key12": "59PPHXFaEGtrC7bX27a1F8yjcQHTC3KK4NZWBeawKEy8YnNxjawxEN2F24CtoWVbtJsDB5sAFLMqu1EcafTi6kKP",
  "key13": "5hrtTJHv4o6SVJiUzMKQ83bEUEdFbpWevwKyhMPZbY7naZdev6DNsWys4wv69YMLSYCyKReXJUnNp7bkuaXtZnZc",
  "key14": "M9nqA7wukDc48rKdCBiGk2d2qVMyRMYRNJUocTHK7kL85ZgvVHYCZJfJYwLQch6AhytkgerqAPprCeci6FEeYo1",
  "key15": "3NRYwLbJ7uCUUZCcyAEBpipy3ArhaTUtbQttQDWPeHSwjASne9YGoPiCobdCtxFism9qVeQP2c3wzHrLt98E4No9",
  "key16": "AAxZetmXZtdy2B6Qk8JeXhFy2hf9FSzB3eiHJ1MNGaModnWmRVtbMKtoKusuaff9YiWAaDgaPJbzKv534xCheDc",
  "key17": "4S26x3eLAukz4xb6BLN1JXwasotErzutzgHuAMcfSqD7hZdhtdSx4d6SpP4EfYZoahEfubtfQNnQAFoHtmPinkAR",
  "key18": "3mhZ7Bwk3ng7McwJYyvanKKsBsd8nhLTXrhu6iJ1afRaf2txn2p7XA1UBgvuukfBQJEZLJinVpTv8r6cG4t1dXpe",
  "key19": "37Nhd8VMw5yiPCbA7BmGWB6Go5nApWe2f4m6Tx8awpAyYRz9f3vuz6JUXnFtfzqMN2Yx7WuzYcpi5xGPzP2k8DxD",
  "key20": "5Hr6iTruh7s5U4tbH8DCwLjpTbADBfnjDnLCNSk5R7hLojMQbAfxgtYBFEsbMSfYLUfvgyKmadLEa2LWkHUuWnTc",
  "key21": "mzSZAjHeVyje5LsGdyVWuLz1R3aKGYMGLMRFXk48q14iWSoGNvRqTt1VKvbK3knDdtitSWCB4fcTD4rPvyFHkVc",
  "key22": "2pMRU2JEonUv4rfi45bRwXZfcY5fNGkEniEMz4a6FTSqeYKsqt1HHuLbaWKLNL2eTXZ8hXfbiCwfoRZtoc9u1aHp",
  "key23": "4BUH5P2nPUmCNuug6XSni1uFFvFKkafvz58smehJfCaaXS5Dfoo3rs6jNe7Mvye28mqjPTJpHa3K2iGVv98fW8XM",
  "key24": "2YHnpi73kfrKnmWNh3x1cujoD7PVCKJTyk85tS59Lh4mjKLWWiohPqo1EGcSRJgyPEq7xB4Sbz7e8o8L9cwY1Hqd",
  "key25": "4ZTzUru72GL8NpwBMJ649mrVCBtr4uK4ep8vLuEY47Cd5UP5x5Wd4177Bw71N2mFPTQscvfuejzZjsqTiNetQyt9",
  "key26": "34uWuZjAoFamke3fMkJfTHMpmo97Ab74pzavXyRStaxiN2K31k87RPksrwNwbDAoc2LzfW7nYee6ntPJoTp1A2yz",
  "key27": "4NnSXHevBLf9s36BAWTcSNGZ9kSZZKqJpTjYKhm7Q5AQaLyat6bXwBJwsMwo536p29ZKRw64zsJ2nSrDo3L4RC7a",
  "key28": "61EVwhHPQpwfyD6xf4Py2eQLqDwRHrzXwsro5k2hCJtRSXW8VTudbtbjVh5Ec9rAkMtCSA5zXqt5LKPTZBdnW4Ek",
  "key29": "5AgcFbn7WTS2p7qShVvP6eZUiCNjE2MzDMAT7TdAnA43YZUgtE5DN9Lj7hdfHJtpfKVFo44fq1vnuzTKzWWEkRGM",
  "key30": "48qW1WA7LQKfXXnaju7uoT1xMAfbiaRDTradeoMrUxSEZ49uaWirccJkeKryZVMLB5fNoxdzTvyXzGQuNzp4Ag7w",
  "key31": "rRqp84XcCfQp8jLzTHvhP46Yj5qo4ipfKBRCLrvqe8DLYMAjBnefFAKrL7dx1j1YY6tkfTqCotR2NHPHH1KwF2R"
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
