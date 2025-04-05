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
    "5JAyubcSBeGCwHeAC4iRVMYvDPA2k3ZpGjRpnJGfgrNPckTd1WLeWXKXeZbuV5kYChzg3uPLQrvhhSQD7dMQMmPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmkKpqhToAaK26PbtqVNoVdUi6Ghf6iMRtqDvZ8zHJrCZQf3EfPJjkBMTJiWVq44t5no8BcaPYHaMyLPmi6ZPVJ",
  "key1": "3SV9t3RkXSGhpv4B2TgnwUNdLiWyuAStqb62MtJTuGLQWGGTSkn65APGaiyiusp9T7kapcxmgaPdWjoias6GJjrZ",
  "key2": "4hs7AF8ZVADMiFzU2jNwdJ4Tj77fz7H5Drtf1VRXPfQbJzHVHkruE5tj5H8zEaRkyChTs1KMr3f6ZqcaaZ7XHQCm",
  "key3": "SZgDiLFbhFCcY78mgPAjVQvZ9mtuEX4yXzYVyTeKwtwYCEr66TSjrEg5Y8y5UuKXsoHNEh5GmSbztbeJspikewS",
  "key4": "4EGUMBBTtuzZ4B4ch3iXGFM2AWRd4zT8Jf8ZpXvXJ42jVN17WHFXqoBSN9o6fVFLpQGmkwxBVEj1gyWA9XtWktms",
  "key5": "4WoqdDQQgRQAWRCE9TzCi8M7hRpgbHa4bKu7SCf9n52v7JprKbdn7KsuR35LKkUSd2PoRJuHPSGEe5YCuj9AFA4E",
  "key6": "5mv3FzL7s9Rp8HDxLEf2sDZzhyuaFtTzanrrxTyxHwsGCHtdy63As8YZK8Hhubs5wETWRUJhZmjjwwzdnUbFTtAq",
  "key7": "Pey9U2uCbewv7aEYMj14dn8ZWK4cYs1CidEVBi5LFGQMRgxC9gU5rAW2vogZ2v3meMJpUMmT2Sssvh8Re1kUMGe",
  "key8": "5NUMrkKdG7xz9FSWxPqDe3hYY24bsRvEKzzEQaHrtczQ94pNK8jgrgZSesT2G3cZ1xypZowBvGTEapUXvkiRqHS2",
  "key9": "45tZ4YzLkK66NKck5A6aE2CDUFwY9wMXF8vGzvtVSkV2wZv96QVQHZthTrWiV8aaJeYrpQYfsErBUX8K3z5CzGi4",
  "key10": "iMKenpYXR7MZRAyLw8swbeQRWb957yzw8RP4FrqmUj33K7PJyDYh16M7LucZg2fBGaiawUAgESVS1LDPCvAHG3y",
  "key11": "4jGnFqcA9BkWs9QSZoyY3ZHKR9dFchshG6qKpsvFYLxDT912hBieeB6L8raBaHM9MzNowWtxEgZ5aF5ZCA6EdozA",
  "key12": "5aRa2J9CKbTb4vkD1Hb9UQttFbmyqfSTgK26sSU9PiLq3esFzg5EBgwY5JdV69ofYaUFA6dGnb5TyTXyGvYAkqNi",
  "key13": "2Czb17Ujku8hT1ektwki3VZYd25VDGKnsNe492oM7d1dY9uuSdSj3NXu9DG4hgD9fW1wV6A1XZVXzjcPyyDjRgD5",
  "key14": "5YwgZ7QJSNdnfVqmHvCkUgeuHKXSDMCunz4775M8dHoKFU8UBgLTjTnBYzMredAaP6PJpQ4scjSjvTcxLxUW8JjV",
  "key15": "5DEWJS8W48YJ1ELA5VVvNJHedU3oQTPYQQzSzmYicMUsnTp2kNydLURHqC7gnLLiQjVSrvFzfjAdht9Ga6GFS4Qe",
  "key16": "2kgUepQQWLwoKpmSH1rf6pyoQJt13YeTTtmLgimpXmCTGur5AbkgzDcsFKTacoa569VjznRh6cjdN6qxKUHoSBEK",
  "key17": "2RJzSGTeo6U8JcaumaNfFWZSLLP4Ncq97QNJwsb4hmZx8Y5FNg4KobB7QA6XyjnSvaeWeWcmVbx31GWtFhcTCWMS",
  "key18": "3Nxg8BWdHzJrqXGBc9StfZVftEvJZJrpmHvAe7pLVz5cuJ5kVw7tbVbz8qiYUpADzHLxqdGaRjMEACMzUopqPrzA",
  "key19": "2HEeY7yt3wLaHkvGoErVd4MRXqKALaHa7U5W9XnrgGkhrCnh26UVuSyv4Y13QufTPzhyUKDiB2pCaKiXGjFkqpxk",
  "key20": "4rKWJ4jTMqbtiArMkBDhqtUMBhqZwHGPLvnSNW8zK92XVuyqZQCfhuZx9937Efuj7zPfuZTjCnZSxLUVHDeC3maV",
  "key21": "5S9eh1ifA3wpMFqYHcdpVmysV6t5JiMP1uRP4rhQPU156cFeZH6xEt3NntCVBwD8Q8BTjT5sLDMSjfGxuYijhVtk",
  "key22": "4FgPcm7Mh42JUinTSafXvh1xx1PsqmATxQmdrirgk5jxrdzwgkivhPnPzZ87tARvHfNMDmh3R6YrNzbz8YSKe1Qg",
  "key23": "3uhJX14ZY9XPupRebx4x7L55gGoMYgRSiUJLc2um6HrkEx2MEF4mWJRYeCDs6YCTCWt6VrkvhrjCRjVGVaKgRyy4",
  "key24": "8aCnH1gksRkxL1F7zeXh5hhMQ4wmYhnNUfm59sZf3bcAtMXU9GFytwFRyyFxUMNgHQAtn6PbyRFJdSmq2EztAX6",
  "key25": "MQRdLxR5RfSuHYaryPaDU2WPDWysvwMiVRx6rCd8TShdM3wFRznt43BBAdUgx8AF7UtdPPuR4utX1CxHNRVY8Wf",
  "key26": "4FyVmVNTZmoVhgpqGUgxDL9fh3P2Kf14eH3Px8GDNZPeHoxv56z57ew9ZABRYtbLMannuLgJLatzYW9tT1YgDeFw",
  "key27": "62WdPecWgzDRXYUwhAR4o51hvZNZWeDHCq2Si4D8cjHbYkVF4twuLBjiurqiZ64TNFXo8DGifjgG8XK82Ge4ZHyL",
  "key28": "4dZfCBvZ565YYaXApEgQLXbr4qvestxxMPYuAEz8VSeHovn6Yg9v4rdHxE3vRUex9q59jbTuSuSyftmMikQRC16f",
  "key29": "3pEn8gJC7XGhJKC4EKm1K4nJGtmFnRdUxMH9b6VjsXUDn9nZvwfBodpvHQL8rWnv9GiUAWTFbgbEYBYb2DN3GQK8",
  "key30": "5nQpKdcSXx8Sr7QcEVPW9jRyywjxy1HEEYtqSQaKTx2mB2EoveNWWWiJWktnPuSy3DczWmAmBmvkrqyARccs9rqZ",
  "key31": "5HrvRQy3tfYAcftTUrwfRR1pnkCCTuAAQBjm9skErQeBJq4xnU2B431ARVhEvxAXJ5MPH1a81oB64ViNTSeYYH1K",
  "key32": "oHBcoSZnr4MTobG8eB2WqnUozDPV92rrqw4ZFKotdbav1H33pnXiJLwH5VmyVD3qmmiABpFfTiTd8GytuHaSytS",
  "key33": "4bQhc33hG2hTrgnXoCQkLHBZ1xH5Q5FcZK43FS8vSiA3rAcJ4qvenYHza1Q2gkfewnLPg3mYNSJK1rvdYTPQPxtu",
  "key34": "5GEWBicb7EojZjGiCT34rrWXGQv9QxCuacX54B8y9aNjeL4JTD2G5Zb5PJSLPue2tpP3592VWdLDSfUyXouM7ig5",
  "key35": "F6KGBp9mkDAkV7Vzru3mED4nL697bKmdGaYdoQqHtxW3nbgdRkp9FzH9LUVF192JT2aPmpZhnh2DpgmnpNckGGz",
  "key36": "5ccUBZFeEgBCkJdMb1ernpohhD1BCpeaS3imhrapPGXpvupQYxmhWk83gv8XCHz8EgnwxX2YwArtDYADCvTxSEsm"
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
