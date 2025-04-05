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
    "RfhntujYHjnGLvvRmaNW6Wsox7PgtEMXTinjwqVu4Vbcyeb9WnoHm6RXp735DDu7KdsnPR65JSF6Zx7HHq8PuHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D6LPgdCUbEyCx7LdsH5bDwSvwTE4cCcxFGRTMCKKrvBjQeKaqsei7JpRFEomupiQDsZBhejJ8pN2ZkNrDUyyzBH",
  "key1": "5JVeKNVR1mu5NLFa65SwAaDYb6oX1S4aphX76tVo24HPSEsAMKLhUFaxcTuUmDygUoxBnATTLBKNKYwUpDjy8b8M",
  "key2": "5DYmWG5YUt598DbfZiHsRfbc3H68gphsbHSeZ2qHT4siDDza28iPTkKcBN3s8DJt1CznRQDKMDhHRHo7x3xksfbb",
  "key3": "4zaBNqYsyQEeF5ZFng2Hm6LLsyDNQ2wDpzT1rDqzW4o13E9pvTF9kQPMJcDcWVMXR1ABHRFR8kFp4ALKH6y5hH9W",
  "key4": "2NSY5yXoZfuE9MnZZZ4Z5AHJNxcwjPRkuwrHKaQ584k2MFcryFLav9Ni1zYei3y1nPYpC5y8gEzPFq27hCNYwYc9",
  "key5": "2fsr9etNVjaSSid4YgP5iVAEwZwxuLzK2YhGxT7cNZNbkZRdZ8Q4AcZsPFgP7n9TePZKd3v8Z5JnURHpaUmxWN99",
  "key6": "3UbSyutMqfrHjuBzkQrefdgPrgqen62n3WspuKpfvkhpYNdq5fEB16HFb89fMXMKCcwRsBwU9ByawTSMHEKqSYU9",
  "key7": "k8k6Z9z4i3x7fiRMQAday1GtaYM56rBTV9twpruuofrDywTUEkZLKJ9aDVkUHbf5tAoH9DR44fWcWGG1YdxKNyZ",
  "key8": "5TatoFih8ezhuoBKqD4SKS6hPEktMefLsj4L766wHaK4WGbeGFdaHuAsteE9AXScaiFjVUbkuc4pntthyXBxChZB",
  "key9": "2KL7yADsDHuVWzqbz4BKTwNPuic9rstPPVaBRXdngCPZTnRpBvfnNMPM5GPsHqQoEPYNm2mHsCd4Wz3kPf7quX8Y",
  "key10": "4L8ngDrfnNCCRpT66QRPC9PnHrhBMu4r7s9cFm9q4kpxZC7tPBJDSVry3XSVAMd4zcnnaJV5rZYa6P5PXRKP1Q4g",
  "key11": "2dw9DEfAoTN3EcQTNfwmnRrgCApWmpbggaHNxgJdGpvnV5xAukKjMfXMztsUwaKoTGfjeUo6NvNFmRgGzziaDh8P",
  "key12": "2zqUPot77nutAKbgZspbRzjxdHRYZcHdFbe9eeyht7FMh7gAdRn2nFzX3jwK3w3vjeUA3ZdGdZmr7zaBTCcapHkA",
  "key13": "4X476RgJ3Ki7a63QnJbjwXSkWvqmGKg97fmcJQT7y8Be7HTPCrkyu758AoaaJ6r9uBYnjAqjYmRqWixyvDzJHiqD",
  "key14": "3v9TQibWg7cs8LcnEasidBG1Fs6uRxDw5Bo2C2Dq1tMyK1rro23opyw721vF9UgGp1AhdNFiz56t3qAhihmsDywD",
  "key15": "5civM29zx4dVu6Lfv53Cqp8gWKg8oiVNs8DN1gE9U7ffZHkQcwjXR19TCsnEbzsZ7TBYiWqcYbe8wFEJ6A21CxxT",
  "key16": "b8C5jZBfXHqcwpaZKuR51fsZiLMoYHa4eF8ZbddpF2hJYHrE1abor1sheKTvVR3XhraZ9GpSbbqSCNPfv5PZr8z",
  "key17": "2VtGpRQ7JX4QFt7sHHukRJG7D7FurWYm2PHnDELvAsfaQGDg5NDnAb1Z1osLjP3RD2Un6UavUeJHeTpbq8oFPcD8",
  "key18": "4WuEBuAzmJKBQ5ZkbLTdDKdYvkUhXkJaAMHidUyhg8Ns8BDNjn1AwPUF8SsMKLkdDVq6XdKfr69PvE7caznE3XcK",
  "key19": "29phypPFKtThNJ2x1mrghhAtaKNQL264TMUWhfxgaoRuHx1MdXzhwxjbmfr33s1td9pF4infZ8rQXUpTrfCUU4rX",
  "key20": "4GbBHdM6nQWsYfSCSfdDG8FuT4K3L3akoZEtC67QVXHW9jbhMq32mWichXBBNXT19g6jYpYBmvdZ1DQ5xLASktLc",
  "key21": "HcCZKGri4dXjHPigf446C6LiXPFGL8CMPNJmAuW283n1RG672PXTYVkXYvBLtj9CTgPZBB71pxiwssGqiRjpqFJ",
  "key22": "23M9qWsZgSkX3hLMguTPy9KvEeBX1297B2vPqHRVEBxCUiBT6EHfud7L6D49R7VdE47xMfjNYf3sNKv3m4tGVBw1",
  "key23": "3drym7mZ29R34T4qotPJeyboepTFisksLDFdp8pL2JLNG9J4esiwvzarug8UMgZtCzpbXpuD1tWGGh7fDUa48niE",
  "key24": "XbiUh4dF7TbS2fCi9c7qPEp5SCij3XzVVV3ppW1fp7nCNjEtUbirnwa29ZmJpcyfQtKXyhibcnC8xJsbH8EMzEe",
  "key25": "5JZD9PfxWhvs3A4sxN5mgsAs7vf159zTgkuNy8x9eLs8rjqN685rdnBsZrPGZiffBxjVrR9MmCRd8v6VSUajM6NH",
  "key26": "4hkNsEKWgi1Nnb5mB66oUoDymnTzadZRZAB9MZFGc8DtC3J3ZKb1V5kYfRcGeaVBAX29JJ6dZK5uUR772yAZ96yi",
  "key27": "2iSagR5DZ9knAw1EGKt1ZY4ySZzxNKx7D979fZdubchN51dPWs2AxTvhxy3WraUx81LzasewE2amsD2ChxDbf4Qd",
  "key28": "4LZ6imaJBCjjSAscLWF3xyVzVTABeraom4oefEZsFA47SBSx9qiaaybM8pXequoyv3EjWkeivawZmjv7sDbBUBKc",
  "key29": "UBctCtwksWgvbuTyt1mY3V5jTEnemz3WmJVhuSRGXPJvdbggv5DAQKNCotR9SNkyF2JJYVkEuWxWVLBPAtaRVNy",
  "key30": "2ti6VtseY9R4FsiBbh55JY3VzuNp2CDEE3ZDwQZpQYwdSqPfZcryhyvSdTrDbC8Z45MY1gZhLy54Krxzq7XyGooU",
  "key31": "nC9n1Ai7CGM6LGX6ENKhPehsakBzMn3Wu5E6uAEPYYkMVU8tQcm3p3pxbfX5LpPtxaRYrktBmjQ7YVRwB6QaMTv",
  "key32": "5DgaU1VF4XiP8RxSRbBtmcMEiBbvm6bWKtup6zek4ji2LbBAx4U9b6hHPiUFPqeWkL6sDwrczw3diYe6e3F9eqpz",
  "key33": "47oe6eSHNNVWTbPAA9P8XeujgXuhJLy7NqQtSy6yq7UsrdNst2x2Cznio87x8mygNLF78DoHZRA2w3La6DGB2ynd",
  "key34": "k2gnmizk1dndooUorcTqSVGA178kZLDzJ91podPgakMJDFMhFYwejVxTdhZSxbKNVpTriJMZCKhydCAeeV56SBb",
  "key35": "bE8nASehWkKTxh2xMHkYd5A9GvAMszFZ3QWJCediQdSbAchW956PB8zjj4nvVRTnLfwMGWhzTahgng72AfsbjT1",
  "key36": "23okkinf5Y6BMRj6NtPyPwR6GZi4AWaB15pVTtkXw7mZkbaBpPXaV75mhRryWBxRSqPu5XesisgVhsNKxkH5gfc2",
  "key37": "S3Sf77bQsAz9ieks4xnU2UHeQo8pkkrvEk6Cexn8rGMzPaZE8qnuhvUxYe2FciRojYeqBQy7Q6RoptAoKaDoRbT",
  "key38": "3XswSbbMuMDcdRM2n5YFGbaodHvkRVRXPC5JpmYRt1yKbxfTBEnawE5Sw6A21CE51eV7FK3aees5W3mnh6GUwhcq",
  "key39": "3tqt2taM8ino7zZo81khbPvTC9nUcQFTgpUuq4QViuNySQJwiWhqsNNGPSyu3oXjeKKhXFtnA62wrhgqkNfZjsAw"
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
