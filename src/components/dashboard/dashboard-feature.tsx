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
    "2zi2gkRYebvwR5DWbZQq6iARaTXb41DfUwB6ddqVES7UDKp81awj3VU38Efem2shXhYX5yCCJ58RDPMcHbXKRaBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rcKsb8iqerfBV7Q8ktDSvfSnpeis3kWtyyee47zLi6y4yEbEAUoRH5eX9JvPLdAES68GaLYRdyKEV1dxm2P1BCc",
  "key1": "47tBLNoMESvTsE843sggAGLxYzNZYjSYV6APd2n65ykf2HmDxwSnTYP4D5Srv2FRhFaR4WehWTVi2D6JDhDzm4nZ",
  "key2": "2TveQkUvNDYDv4mcnUtJvnpNjQANcNhtzcyTobKaivS8dHXWzx2Nd4Tcf7jnzV7cmU9nXj94JPZA9ztEydLrcAFg",
  "key3": "2xkWaN2bnu6LfEkoZW3erYuJdX1ESpsSPhxtrdwENrbWoe2zmZzWW1ww4Lrp4nF9Dtz5CzaYp3vgqjndfrYDfv9Y",
  "key4": "4r44hepDQA9ruhjJKMCiHB9M21Nzd9jXFeZVfYdBX8cTZsD4F4Q7wcbUrhyoBbf1QRfJvJj5fxnVt6cYtTY3p3Uq",
  "key5": "3LsBNFnKo8DDHKg9opTsSRoi4SPXpun1Z2y33giXKECouEXRVdakwuuXPAGrezUPR2CWWLpiAGbz3RZPcHo7NZGP",
  "key6": "To2Phb9quHfkodtLj3gQyZsHGwD1BVTuSTHn6CqMKck4A1zBg4XjV3V8WgcGReV1UjKietc1eGn6owYyVB5SFHG",
  "key7": "5C5YfQ5XoXjBGs373ZSQJ94oiDo33edu7VJzcHJ5hvWu2tYeKytZSGyY2JSLkM2kqpbEifHxBoAm9fNZ5KmPKnQL",
  "key8": "4ECu4SwJJtQFNth7ZbgzJzNGXTu8RRRqhqdJzec1xnWw52Jf8M3zSMo9NqN1976KHNbLwRaFZyqzymZ7rsttw6qT",
  "key9": "3LQdokoRoLwncNLHzT4Fd5D8eLcJbXQs349sCrGRhWD1hD25LkimxBtQv7TYijjSBovgHR1eVuNE2gh5KrQtiGx2",
  "key10": "5FVPUapZTGHGrawB7Kj9EZ3iQEyFDLjy1fjB9oWvVfPGgNqFgiMu3F2xpMC8Wg5GLh9cT7e4mYQ6aUV8Df7ZkXk2",
  "key11": "C4A3zEVF4dMNhSf87XxqQzaaDRTFgRcLADvw6wSbsw49dfoavqgrDsHELvYUjMJ3GdYsbxk97mREuJ8LX2L3wC3",
  "key12": "3W21ZaHFSAhP8MxMQLf95JRrECXAXRjtjRVdqRmddDLmnB56gXigThQq3HFz5AvYaurRwjWDkFNsLuYSH7YsAYF2",
  "key13": "Wr3CvKQKdxThjJnupbQ1qD8e5dQrPpqPtCjeqwXgNUkp9YVBWfQH93SmkYvuDZsvQYwz8GUTo3MYzUY9WoRcUQU",
  "key14": "5tG6xF6wgLVvbkeveJfxHv8fcwWzReNtGCbpn2GANTgwEaiUYuZZRJLN13ZVUMDndnQsH2TVCkVdrWFRsHuH6XoR",
  "key15": "4VAeM4g7U5qaWsjkDYzXXpAFwdwaZuxPAPhkJCViUkjH919H9uiL34BE1GRoH8oHt29Hmge3afo1Loxfwt2oGFEq",
  "key16": "5xF2wxWvCGNXbSSjNWwxj6uFNER54KGvsNMYgMSN31HcDDNncuph8vzRD4SYVTBZCJSp1sDUbbPKpCgWdL913Huu",
  "key17": "31inSWTLeUzVETMbX3JebT5a7D57de83QWYTX7quy39Qty3vJX8hpTgHqp67sfh8U28FrmKri81pdFPmGSNjvAM8",
  "key18": "2XC9De4g3Cx6eVCYrSSfFbsuxFkoNTMb7BaaRvJT4yuwF8n8oYpwZemeooJ3a53QLNWS4hT6ebh1LTReeqsgSGs1",
  "key19": "5XQxY9iSXunSiqNHaH4ZhNjP5h2q1RZ97my9F2iJrAJSfEm3JvCMnhdBHz9ZqfLe4gzR9kouP1LuR2D1SAVjyoTf",
  "key20": "4Qi9aH1q3tHvV2bAGXJSjRWEJ7VLQk1PwrY8TZj7iSRsaqqBbUq5ypuuxbBqcQcknH7CuCeMbcgq4teRD6KMxvKS",
  "key21": "v6qchHj3nBPYtgfsiUuR9beJSRk3PAZde7meaMVAncAuMnzrZKfoe56RJyL7H7zfYeDw6tVs4c8mXoEGK5FwMwg",
  "key22": "2vyGJyjfcXS498Bs5NpxrsUyvL9HgTjnH6qHdg72X16xYR8Z9xLfdP1fFbgZCLe1xtTDFXFpffwnN47LfWVtbLM2",
  "key23": "kZPH45SRniyA2qNKPEowMAaVNTWZPJTF35v5CRmAWGbFx9bjqL6JetVLfE1YseAUkUADW45HQhCSLZ6x8vnE53S",
  "key24": "28ypx61PsTevm7rusgRKjbWH7MJPugcHmiqewoi5DyX9GQr3aiYU1aMjYnKYyJxtpAdryTU3eTkw7SNBwnQD2Gph",
  "key25": "4iF2gzZUqbrhn7ScKNpn5AQ4Ws717qYYEqbWoN33FuRbDKJMst75ji3R27x2B5ApAS9utteZavRktiMYFPHwCCfK",
  "key26": "3NFgoViwRwMzaJ6PAoxjMYU9eXkoZxobk9ujJBVtzey5JKetgptA9QcNBBMpmBuiuG6ezdteGYoiywG7SVGiFmWg",
  "key27": "3HJCZGVtMtbhWaS367YUnXXWq7yNHf28mDEJVNLbVh8MdtCgKL5s2fnoJqMGz9mfem9wxrgFctnfDbq4JE2o3Grg",
  "key28": "2Fxme27YZK3TatYWYB3DHx4E7gVyhL9kFe3iLa37hCP9pw4nWeCGxU3z3qk8JPe4apGegXQpU7hVcv1kDdUhX3CT",
  "key29": "4FSgMsQYNbucXAJi6QP5mzoCh53bZmJi3q65HTGWWomV37YX6kjnxYEdETPZRADG4mEeXPTE152Ebzvv4HXQCKZ2",
  "key30": "55wEvJaNYf1oWHqurDKYN9qiCrE2ro96pEzqboxxoC8C8vPWufxncPvG3DdLotsEXLJsE8wL2J8VuskGBBJWhS2X",
  "key31": "46e3xCKUAfthzbbdgbxnFycXWVC43we3kVkCiXYWV56sJB4ZsuXnmykQh1sqMnb7GRL76k9jVQ4dSTQS6xdH7pmU",
  "key32": "2N4zn1WU1fiRGbCzfAY6dRGB3KHD7yoECwzaZ4uUKWotRQ5D88PQs9wcKFbbjTK4ajR8h84uvehqRfcPAoyS5XPt",
  "key33": "3v4uVZrkwaUDgj93GfYKkoDzNHM5Ny5dmihij6e1kVmGKLtzGzteuros5rATzFWZmHwopfqGvoa8C7YARgvYbv1A",
  "key34": "3pwrzzWoQipPmV8vngPJfW5KyraD6mMkw8x6FUVTsiEPc6dC9CdYUsB1Ngzfxbm6MuQ4UVqHwkET2EECP9gktDWs",
  "key35": "3o9GdjeZwWVsCQis5nMrRtaiqFfVCnj51bVqGfEVzQzkA39ejviPfGi8ucGvwevxtUFCMjfGWidUE3oaEmc9rdUe"
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
