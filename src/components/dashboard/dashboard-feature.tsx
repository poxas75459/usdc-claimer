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
    "kdu9ckRJXWsHSkHajSH5UD2Z6jwdm4UW2HtyKa2pTgjvyZQLoaz9myuoDkDuwMCyTX8gAAqeh1G35FMDgKLMahV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XUwqDP3sb6QZyYaVLdgiXyspPzCP8RbbTYD9MZmuJjUGgu7KHBa2zjYPUaozA77oa6xYEkXcb4UbR1vWVsc2XM7",
  "key1": "2xURgtbWpztt5qH2fnA34J8UnKVDKkGcjYqKfzhzuvQSCGtfmMxhoyrmTffSh46Wcf6KX9XUrKR827DNG9Kzbofp",
  "key2": "4nKVZKn5AfSAPBya82fACrQ4TKAnmKu3v1u2Nxye1LGosN1ydyCRoHk4HaovYCDpLsLaK5EA31RU1LuYfsKRiPWz",
  "key3": "3VffSMgLqrnUHDsYmbKKYEQ14FvLrFFqb3Fb6J9HX8GquhD4DATkHymqVbRWA6vJiTBNLZ81DeDtAUPZkLJ5JRaw",
  "key4": "2fCLupasDWsCaJwkJ5h7HVWBB8jvk3GmenS2aoC3rYJber1PN4dxysAwWbTH2Q5XM8NhGtGSMbo6FL8AeZbnEkw4",
  "key5": "7PRNCcTQzrMXqori8WEogVvk9bq3XeFNpxE3akUEfzTw2pRFSC653ALAP8c5sBDG8HwXzbVDqoJBVUmj8ZQU7yu",
  "key6": "2y6wydxpj3vNQGyHgy7kkpBLrPu4sMQU7JS6LsYtMC4suY5uuYramQVcZT81VydmQ2VZcPkNczQYHbWRste5dqHq",
  "key7": "2qf368zoaTqAaxpTQy3775Yszcxmgguz3xTjgDoyoPigyvYZPGXH7iwhLjhfb4Ga2SGpguXvuPCTszsgPLQzL3aH",
  "key8": "5Rdf8Y6kW7kVk47qpAkcrAVtuQusQsYbEcFgQzLFr4gdhZHDWTqqQcVkB6VsBDVi5sbd2CjDS6JeDWmw2mARtsVB",
  "key9": "2bBzvPGQuZFYe5gY5om5tdb398x9Abu4UC3dGFLQjFLdPmjT6oPmfnwkDfi1Bh4qR6jsWMEQx1vGYBVUgHauCJjf",
  "key10": "5pDUAi4JUjuVrThauR4C6qcYrxY1sM6aNzGdP9hW81xYnSypYZagswuaeCHcPDLg4EdYPezhpDpybXU2HGpfnqm6",
  "key11": "QpgspUXYnLVXTBmENvKEt6fADLB2BfZBCibypdYN2QLx1pM9vXXTboLjEQ2DDBTcGRpZ8SVdJsvzmYe69jrcoTE",
  "key12": "BRVuraXCgisWG354jZPUpa7hiF8zyTdtYZ58ZaW1nCerMJov5DWvzcu3fEXaQwJwSnx7Bb3xRR4LRoMNjRBnJ1q",
  "key13": "1z8ZzUbRdriyDtkDzjFoZPcjxvDAiGRpdxQGodePQZc7kC4qBZRhDJxBrHwJevJYSXazXDLoVn1H48DD2kM4UFL",
  "key14": "5bKAseoyivrk3advkV93ikRswtVUF7BfMW4vFSEzdhtKjCFozX1EV6bVnUhPVa12zzk8z7sMo9kszineB83kYrk5",
  "key15": "3defw6XC12VxNpfPxoXP1yEScQ7rdAzeiv9JA2QQUx77pNTB6wEnuaqZLp1oSDQjWsEoA1AoFWn6f6M8om9kph7i",
  "key16": "5KV9cHTVY8D3DSToWkkPNuCKBYdHxa96zUbwFjjPM7WwQ6FS1Y2ByVsPD85CPiP9ADoK9dnSXr1B7yj8EtKYMLHC",
  "key17": "4Px49RdBw4Cho5bjTR2vnHPTHU5T8e5gZf38YaDu4o2uUExFaGsqu9KjAX3jXB5iCGhBCQ2V4t7S19mGM2D2Y6d7",
  "key18": "GHjCPAT2Qz3hmUUHcRBCqUKcEEUgnb7SNDRyeZURXwZiS4UYwGCRHnxXh7CuD5KKD5gmtsRundmot5aK3kkt4UG",
  "key19": "4hU6BguPVUNjCWtvhp1ypQfNxAXsZWkotYjN7NorCQ4R1qrLHBN1NueQcPFNtaa9YJbBeXJ3jeh85b5hVxh4Xdr6",
  "key20": "51FRbm8aPiPZowpRqFMZtJmm9NjUAfArLtfheTUKmHR8nKV7VY6yeYVL9JYw6p93AFwLzuzxPnF4gzPjGtdUiT2L",
  "key21": "3eDhfY4zWMpQGtz996qSespk5RnG33NNBHAPbfCuNHbDeF8bca9qXgqtjsvEtg5HZsjtUP6KqsLk4DVZTjyCNDQc",
  "key22": "4ukdGNVQmVo496KTQBzZgc36w3Lx4iU6RKwaFSKqLSHmXkRXyh6U2iYcPCBhbt81Qb2fyESbuKVLo145ux2WGWt3",
  "key23": "43wpjFFG1wknhe4CSe5DLCm6Bz7x8WrCZHDEGvUGXrc3ry4Eix1PidReAjugDRpxMfSkVFUn3tN2AQ41kc6VKyTP",
  "key24": "4zAKTv5MCiEoiSkKFaBeU3q9PXv4iiBMW5NsdMgXSwU5zd4uQYS1nfNWBHFQbs3GoWfPm2GX1wPDNijeQYM6y3aE",
  "key25": "nWFbrCTC5yGEun3CTuW6mq5dLBoyhtg9eyKyadL1zZJyeUNmZ9ji2iRmDRgGqtzue5V2AJimASPryCCKFHjN17T",
  "key26": "Y1tjDUYZ9NoB2zGxKKHQa9VmuWypBDMch6ohqwp8qbKNtFx2iQiVw6JzKDkxFzckfGrrrCW9Rcm4ZauTg7e9x4z",
  "key27": "3XAmCc4GUph4M1S337JZvahpfQZwHdXwRLrrdAf3mKYZnZryzzJ9dZLUZK1P8H7gAa8eTMizMtQoUUKzoi91uWv7",
  "key28": "UoBShvp5rGRUK2QxK9wz6vksnU8mZdq4Lg63AALuARBz3Lf3nNenjSLJbQkqpPXAi6wZrkV4WrLrw1UZE9s3zAJ",
  "key29": "4h7fWSfzFzCst4bs9nX11v8C1HLcRiYsA2QE2EDSfJQavpj9QLapazvwfiPxpSfE5FtvFss6X14QyYrq79r2WG4Z",
  "key30": "2cUYivT1pDVd9se6Ewp7vBEHPkrFur3z9qrU26KUeAyuVGBYFYnv2mK3xXUbW43umdKGfd7btkdxxa4RSKFXyV8n",
  "key31": "5ey3NCnLmBaLGCijXyfN3PL84UnzTFJLhaaUQUA1eB7VA6e6LYzTepfRYJh6jGierZCeHyiHQegZyipWZchSnKsg",
  "key32": "5QZB3zR4DySwniKsWEp8b3VkL8TgmBKdu4n1Uh2bUHWiDJvumhEMYa6cekrq3MwrQVm3PoggYTfG6693v3Y3NqoK",
  "key33": "67U8sJ3W8UVqhp2RjVyaxKcEEht4hpqiQVcU6C2Ad6sxJKBfTx6mcbjrekznZCBqknhABT1z8rJTQYwsEGcpQAkP",
  "key34": "47pezD7NbjqYGePE8vc3nENNWUkv1SDuoLk1jZecGaBuamsfDwTGL9i6bvdZTc4Awm3tP1fTVNpYuUd4cpWf8qKS",
  "key35": "2LLKzQK8rriBmvZyMYV8LnFhs7GgFv9oj21S4wvgZSGAD5mv1NgeXC49tgwsC8BS6qoctcjs4fsa7zjfcuYE5o1W",
  "key36": "3sfhZKPsLiyUQcB4HdzFrQp7NstDBpeszos37Q71JrXGwXJBFvtTLqjx6nhXEVNYJFgL79xYQTYZ4RJuZKChRHHT",
  "key37": "4qB1Sju5CgbjmvcBUukcb8u1Et8keZHzjGJj8ydX2dNGJFXbGkfHsWJRUR9WNkE8BsZU3bijRaBYu7NRX2CcGxTs",
  "key38": "47Jm36axRYvunMXRoTxAAQJUuYAGuVhpvFnPLzDL4vnwdPK9bm7ZRAsbt7PtySsny4VimkVAs9HAXM8wdsHjz9MR",
  "key39": "4pTaxBaXqHpn78392v5CzGZRpYxwbg7kzuhBRABbu5mnik4Wyb8jGx9aP1ZB3q1hwWqU5WDNRDapm6TTygkBg3bA"
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
