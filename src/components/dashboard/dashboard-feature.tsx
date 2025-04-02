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
    "2SR8Vk2ia2wv4STnVVhrr9GYH9aQhaXZciYkLpg1dYuUCW3vUErENLqoYhwnoS7MZorCzAVSZmsEXhnUsyMZQgxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUiDLeAJT1hNk7eCBXgfTyQSQwkVNoCzmUTxEudn5RmABAgNjqTvUD8KZBoYkEPj5SG6c5ZNfwQaSwkfJGk9tpP",
  "key1": "5Hnbi7A3rgDnZeoEDwkZti92fWynYwV9DFqUoUESmXqovuJPHQnfjCAG8iQcruPTb8b1WsZzRN84ue2b3oBw3iRB",
  "key2": "2T8Zpn9M8FvrsfbY2CEX87VXAasYsJrtt4PL6QSzrWFpBJpYJNHtxUD56BmCuSKS9fgLwCEhpRyuW7YeB99r1yxv",
  "key3": "21BmHWgPZ1sN77EL2uZQHxGujDKUpyWo3M9WpxkX7MKbxJqLkkYuQf6BXDx9BekxfJN4yXHiMD4qzE3RHZpe8sh6",
  "key4": "33Lpojpuf8ctyC7WGNkdqtu5bdHPvTg8qo4VBWBQHeqp9pvTnRC48d91e4u8dt2V89uGCo4MZ72iEcaTPNvZouhj",
  "key5": "4DswiKJh6MVriCLiWzuaZUUKUEW4MLY4XorT8J7eXy72QE914Rthbiyx3CmJZ619dwPg9mQNWu7tjv7irC4sds7K",
  "key6": "4T5QgYAdTsZx8SRbuYAoRjyh7NH3HXkwavLmdPKxcohurq6FvUG43s5LCZi5wzcsFnN7izUxL2p6D6szZVizx8Fb",
  "key7": "2WRfk9bCYeMaeHkWtzeyK3gH5ZuQQZRus2tqtcjtFndgFEpbHi4woZBo64vwbUc4HUFWBTqLKvR7FzpYxRA87FVx",
  "key8": "5sLR74ELchYH866xvTovWBrdqE4ue87gvLuuQk63QbHLAjJ3rL8qu43gyQy9V56R3NMi9cigBdqHh5gHpx3XASQn",
  "key9": "Y7i1uy2LrULckbsThnnDzn5jpB3LtQ4WMPatQ6nsTXgbdAk7g1acr7EY3XZx2zB3tv9iVKRHQcDnfqWcyN8PoXL",
  "key10": "67ALjWF4k6uDmJDP8gmDEGtS8NHfB4FvAVqAKQ55uehowEFQEkqSDj1ptSqXETowH8vxcbAqiQG3woXXTBmn216V",
  "key11": "4NVDcRRR14bWegvSsnjtTQs2utmyC9pJDLyzCCT3Av1PAPzZpBJJjYTtWnXqAXGuveAyYWD8ogXaRXxhhkQZaeSr",
  "key12": "4P2z5rSBNCiNV3U2aE61Dg84AsxqVhrwQwENoosq1yWBKBNWi3xwsS8gVvwDWgWBLH31aM4X73BjV744qzkQ9rtw",
  "key13": "3yYYkV1d8A6FkeCnMepykyVCWtVedhMPShW3F8kPTfa8Ls9ij724ReJP8PdYZUeJFwMR2CW1LTqdZThQaCtBHc3s",
  "key14": "5o6yDW1XmNXY1twikua2L1rJwVZZpG64q8o7ZXgA2KXEU7ZwxvAqDMivzGKy2PiQTtcSAh1QWN4LYGfyqsCTRF9x",
  "key15": "5eFFJpjgeA8CKXxuL2PLS61vLHGwEvYtiT8xfYveaWDsVRiALfEZfPVS4U7gdB4ZPm1XXxtiLgCP9t9B2FAGz4FT",
  "key16": "3XAUT7DVS4rhRxEdpSVrfqg5Hd8z9MUXQCPHf9vrsRe6BbtyCzvHoSvXhCrGHJzoTo5KHYmtGDnTcmyAs2mthViX",
  "key17": "5bFNnt4PfxVBTEN23mjaNbFb2gGQGQnvWaMXzneqQVBYtZs2gyHoiUTE77Vr99fVwVrczj21FW1dve6ETACjK6kD",
  "key18": "4kbtEGnF7ZLi7SynqXUoZTPKcBfmKbwc1X57uGQRjrqsmqUA9jZtdGBMyy4ziyJSmqorUh9ncrhvUFwLjpMZa1Yy",
  "key19": "3GhjFYHHprptisbhcYkRT6AFXP7YWEMzktpdACEouDH3AeAe21uggrwWEofJHucWn1zoX2Gr2yFgXA5krte7ZYPT",
  "key20": "2VWph9NWBooZ13zJ7ZrDTQhmeHpZuWWqV997iCp9ctdjv7NYfxag6UqxZXbNeb3Gd8qpcAT8EQCcFsBPecnaFZ6u",
  "key21": "4mKd6BNK4mLwzRmhyCbV7snbcF6fJZdz7iXAQ2FPTJi36CjGLjYTPgfWEaq6216qBfeUoxWEzBqSmVosVG3wrZcU",
  "key22": "2ztpQ3aMNsq9DpPoRur22URmdAj5eqQuJ4BjBrJEwTdRZHtCdCRGG3vfzVLWdSxmPrJdsumjdrMKpQLBAASMa5Bg",
  "key23": "58MbzXtTrQpzxpD1DouwgRBvQLMeJ7wBZNum2hmjmBGAFUACsJxw9c3iZaaTTHzbcmYFBFWqhxvrAcjo2pthkG7k",
  "key24": "4kVBtJQVDs23p7V2BvkXFtGyyno5b4pfkoWmXyKJAqPnkrruBxHyNJA74CpHShpje5PGxy4MxKH8Stkd2rFMRnDj",
  "key25": "2be41VVqQCgTki6NBGuEsUmRQV76XoEq5fmRPEskjTBJfh2QSWGSEw6HTx6rVVx8KswpwhBT1wofR6gniPWrbBUM",
  "key26": "4gd5Q4M1gF9HTq3GPd21vuSBZpqEVf7U5MyuYVzm35sqcdHdQtvg7uQLDBb7K1uGzkjdJDSxY1f37CuaFmyoKoox",
  "key27": "yYk6iTBv3ogbLoghccetqLprmfgefmy3UYt57nUz4PLBj7VFu4BAjCjHsLdVzHHPgwnWoSV7B4T29QPJxxqCrSx",
  "key28": "2rffkJXN5vH198cV6DXj89amo7ts4ezu2yCiumgkKWAkgXVBpiVq8CJMvBAMEgWNkSkk66TW2QZoxh1ZtiVQSc5D",
  "key29": "4eoKgXHGsShxaJ46Zet3Xef1H8PsRcrtRYZ6EFia8LFNsGa66W4XBVuN1TFRVX277QenRjAotQFLsTwAcvcw2UFW"
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
