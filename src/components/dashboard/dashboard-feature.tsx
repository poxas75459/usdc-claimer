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
    "2ohjfyHPSkziB6KFVM3J4ythJS4B9gQiKAUNsoHsDGKdBAUrQaifZpAyZ2XSCYLvwwfsHGVtsGy9p3sNtcLdJTQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ozE3yx9tXVnngpU8huS8PoDJr3aiDthfA1KBGUxuAWrMDqwSeFv8SUjNszm9vqfWcB3chGVpDyj8CBqpShVJK3M",
  "key1": "3Y11Jwxsm2Z88PSNaNTeeAs32rXtwQauD5ygUHaXxs4tdMz9kxwr3ezRPgLUxK95XQmMFg46mcyzQZhH5uhcbXBM",
  "key2": "5YhiBrDs68VpnFXFWXnSUbuL9RjL6zM8EbHucFXBACASc141TykNkKbu5gVCkKLNESDz51KWVAzSM7X7hBk2w12f",
  "key3": "JHEjMsW645bpqynT4ZBCMhBzXatGKXmQKL1ehPGNdQtnvGVDnhxFTzspk1D6YN1etcEc1tu2akYJvdkmZqSniVH",
  "key4": "2VHrpMqJmzbTDKuLoDXaJTgbq833DQgwVR6YYxstAxXTwhjR8Rb8itmWpGvPTeL8TouLKgVJfsJ2ZBUPGFceoSnk",
  "key5": "4sYmHXPbTj6bQqWKxiVQymHUofjKoSWBdVCTCXs4sdnjLC7cED8oKXXymtxE3iWZ6x4SsuP8AazzFfWr2oYm7sZd",
  "key6": "UHZ9MhNfvE2ZjJzYnESwM9iUZV8bTZE21s1yJYCAoL9Y6aDwoE5qwwgaBYmQnUrM8AASaWJBayLrt14mVKZAgLF",
  "key7": "4Q3TZeAT1rEWUWnHaR9v6pK2A1Vy98sscTgcRiJNLhj5mZg6xT5PM1fjcpC45HRKeCHGrvpoU2tBkTri3cvUXNXN",
  "key8": "WsiDy7iodYxWAca6Qo8CeUsQF82GqNfJaKc8wVhh6dvXvmWwiKxp52bNuyXsiJvRxPJfUsUWdiRDACVBgYUbJ5y",
  "key9": "4NGyBsSBao8TueV4T8ahiMLAALUAVdAqVuczdGSvCkpA4B6zXHLStjGU1W5ghdsoJtFiefERSEXtj9gQqrKj5W8V",
  "key10": "3DW4j68HnMGXsKibuycD98RDaBw51kjog5u31TCdM3RgR4TQmHgqovnR3Ns4rWmdiNBnFgjrsGrqznpZqTTZjFXv",
  "key11": "4y5NBZrThWr7oJM7Gt7PUedwL4KNy8mxPPpZAzQE7kcwCmRzfZuuxkzRtBnAT1goNCe2gdDU1txzD1aSBR5WSZPz",
  "key12": "VLqotNiY9Whb8dUx6sJPe778W1UTq769chD7vtdV5Z1tmnpoP8LUa4mhS4JDY31QC3EevfF5LBWNtQrwUQruCJ7",
  "key13": "GGdCBSNoPAkf9M8B25oYoYrjarxc7LfDK4aJAci7odaa3k7cQc49f6XgNYQMHDjQgirzQAdDP6bDemgCvKT7Rm2",
  "key14": "5NQfZ5CQbJJYZ8s2861ddwyPnNGFdKF4UcC7WRPcuFw5XUdSpywxQbRtFkLXtHsAh1tw38uspvxSg9FAwgcavkdu",
  "key15": "4NabLmc6DdEoC9Kf76VmDFsfH8t5348na7DU5JdumipLUHLwrS5mx7T3uqnYaGpfdBBYe3EC3SKF75kPdFrH4fdY",
  "key16": "2bfC32MYVoBqmN4VxxPqGNuPq6uMvaDQAbUrA2kXFAHyLev65wSJN7HK12Ldr1bSAyv2PqTAfTtt5Ec4Tkodxkx1",
  "key17": "4gF9Qx5GZREiapZznTwuazVaXLQPRawZRV1DSdr3qmSAjJyw1SX5sZFJJZrEkzuucwRPuJzeq9hfeFX57biSLoSy",
  "key18": "5EEVmCuzHM7CJQKGqdJDTyiLiKXhDBKGSeQUo5L9Vc3HCNQteK3vFnWqavQUEfUzi43PqrRVXYmcRpnGrzLLGhXh",
  "key19": "3JiMvWAXnMqfdX5cVi2abYNMxeXbDZD2cvt4J1rxQKP5aetHpPEBci7TyLTYMiDXd2kRsbSwuFkSMqDvtUbT6jK6",
  "key20": "5qb12ga8jUYK2qzg3DRDuy36WuLgoBQme6bxeyJkjXYSXCpN6dKQgNZZqBKw27F7sxuHdfKP44kSzhyxLjDNVW94",
  "key21": "qebUcFY59pgzdrxr5SEFDyw1Ap54xvGo8ZKpnYQFX4W1hexyJ95a6FkrCtLyUefzF7GKkSXVZCQ8tk5nvk1iY4i",
  "key22": "2xhh4HmeYmAV589bYEdQLcZL2TUc9gbpyDeLd8eHTTBJAqwhgFhEygo6q4UebFmABmbGZzNNZQ8KhfycgLvXE6je",
  "key23": "5YmgHQWke4veoV242hcWqujjYaUZsfVsmCwk4g1qqpRsgs9oTisCy9rZwYy9yYEukBXkGuWWiRqUM5aDCpVGg4wU",
  "key24": "53P7KtgFdBmAHowS4YDiXikM7UR9p1KkTe239gqVELef1rre1JzEYvxeF5XCXoz3bLsr8firHhSncVpN6gzkYa8y",
  "key25": "4Fpkwyks6JgdKV3hLFYeFjeHyPgXvoHFPeDRWXeQd3EmV6APk3Bdo9cksfHeNscFZdt1bys399NzQt3dFtE8wusE",
  "key26": "2TWztVX72xXtWAC2jtGanGypUCGN2C3UzNCjiv1QULTcDKfxs3ttUQ71ZEnGxAkDEscEyyoTQZHwAC9p7gPTNuJx",
  "key27": "qR2N48uhvRfVxhiTJzQ5qq9xT6aQTw6DWruVqyF22zkvrQuQodBeaCE2dDTnvDgjFkZceY14VaoUBjBGwgLiTKp",
  "key28": "DEMudYhcrQxBZsjC3uS7biX3R3HM1dxUM7MBXctH39p7beW12XCwNXKzo1mKANFg4Cya81bJhuhL3xWwbys26nS",
  "key29": "5Xx13DfCB99cuRxeM5gGWu48MkNufvQZMWTfyy7iMCj19Sq5eTrDFiJbxb4TaarBR9YeZDF2nufVZ8JZ46TRDzeh",
  "key30": "TaYJcAq99rQLyDPduxstPqycswZHR1J98q3EufnCGnsFSZpkG67CQDsAXp78e7E6ZzKnrVEv7XYBbtEwmxw8eRn",
  "key31": "Eqj7U5R4N9EAv8AgMwxeRd4uPvLzXBaMMWwYpPUM3rz1NJoLr3isxbNZwLWuXg9mMzeSHDpfCLrw3DewHYkDQcD",
  "key32": "2UN5bQgDvAGyYYM6E6DKVb1Rr8WJSVbnU2wYqUo1gqTGK1YMYztuCAHaTSXJM8wCuimMAeRaDqG33Y2fm4xB4iS9",
  "key33": "282Sk9XgpHyXMC4pZTdYTyi4foygogkCCXRzHVcdmr1CCdJJZXthu5zVtdTimt137q7B7Sor7QfpwZHf2d1ioe7Z",
  "key34": "3Nbe9Yu2w6GPPU4UTj1bitsdAYYs777UnUd5xkS5xaYSR3B4mFB6sS4heebwyh6BeXGVsPMRTCt91TGqC7fjh1nu",
  "key35": "5MQYz3MRaXq7SWg8pKP5eRko8LNDiauA7CisVqUg7sJVVR75eLFofuEGZyrgifs5i9PkmYiPtEYL6ZXZJC6paNFX",
  "key36": "5RFipQPxpgjwwg8uPRBoNZp97Cy6UU27xyepTNrSpXahoxjQzsAKzZ1FC8Pa8wrL48XcBJEPB8HQWugwvuxRqSgb",
  "key37": "3xGVXkHNDnytE4q29FA2PXgueknTR4wPoPghPDe96UViGiuKkKAncDQJo4DGRBwf4Do3shVzck2gv7AKxUDjGMLq"
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
