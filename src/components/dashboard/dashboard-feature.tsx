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
    "4bswTafNM57K9d2fHAuyC4kGnenVGyfm7P1BRtej48mMZ6F3ADMk2Au4HL4UyvQjymt4NicVipEwkJb4pnxXRHDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uiuk9zAiZhZNSaJh5QQP6DW9jYb1pyZWKVBKuRgsvrAEL7CZwgfkg8MGCgwJ67NuA1joydY5aUavQgG6EaMwauq",
  "key1": "5GuHx9FMrNUHsGWtzcJhjTGB6TZL6TCuwXJDms5kZGFU2vjoqN7y2CMTpCWp5CS8EspxvHcW1NR19QtUvKT1g6ua",
  "key2": "4aQcVagWdjBCN7S4AFgBRbbdeJtSr8pLSjqi2GykuUoEobp7iiU9dS4UAszYZWivRT8bvtyCvF3Bj8qLRLTGb3i2",
  "key3": "2jyVmqrCsRxKA6ydeqLS8herFK24P4nvjbRdcaztGPkK4yiCDgz9ywxFMGqbQrS511xBABiem9tDAJTf1P1qPqzo",
  "key4": "4LTuRCHmZi4WXWJcP7YvY5q9rtpM9Gf73VtpwTmCwTLPtiisfFDvS2BbHVYLosD2icpSmSGLFn5JzJSgAFyK5PQh",
  "key5": "3ovoJUhMEDJjqNYUZYLeKWog8fMnxNM1kVeUjefBVyv8bLCh1CKWdsNhmbsUwgBqN2vRKA6M4zDqAZEqA81xCsW2",
  "key6": "pc7HxdSx2gQH3xSn9Ckd8nkRWq3HNvMMwuSvikHwuCzkAv5EVAj9B4vVf1qh3mPYECVVYFLw9Q2XUHg8EPV9Jd2",
  "key7": "363bLs2mhDkmFJ1yAiB32PpDAzjMJF6i54WfxAEuvHye7JQa6FDSMhZtkDHqvk7r8raV5HHAghYn5zv4oUvqYrZJ",
  "key8": "2hKpd4ZUBzKxT6R6kcxXHhcvuD6skgZEH83j5B6k4M7oVisHkzmmaACvBByHmTicLxdaEAEoFf66cv4spdNN9iHm",
  "key9": "4RwdMUTE7WB6gMTYfjqXQeMzJi7RQJpD2tTtiQ2n59ExhJPAHKmf6YDm146q8th3VthJoX9hSBrPfyZhZkeTAZ3G",
  "key10": "M5b8dxtXkDvUpf1FFeKaM2aaMqzj6NV4d6Sx4ESgZaYT2adR4P1hzEsmKvibYkarvQot1u8NDtKEoiURtgeYn1f",
  "key11": "3A7naGEL6aE9zXdN7vfkSWpZR2WpPkPPBNbCTbfYWkbnCvEyrPhq2Hy24fWwUnkGN3wFnaXjg93Gzb5aup1oktBg",
  "key12": "prnSXJxMr1wSWiCHG8RH1jExxZjYQFtAeLH1Wk7zroEvZB7NUEc88XnySFoSMpiAjnXPSgvufRaf9uM49YhCszz",
  "key13": "4Yjo1Su3293pHzSv4pKWdcX1pRuDXMyZCoJEJraBr2EJnxrdH8vhZ7gYfdor5ZCjS9prPvLAcbcxvCN2t9b82UzC",
  "key14": "2euMtr9irXFVtawtSoaAALEHKbJRDBx4NhrSgnueAzJnEwMAHutAUnt14qrjF8FMtQjGLPw4h6qqJmCH4XWBqHR6",
  "key15": "4YbFm8LHxqDTpaTXKUmYpxkqEi1rRBcMRMMJ3dm2Y4tsSo5FcgRirtCWkxWf9EdX3bAdXYEKzTR28zsnijxNzFDh",
  "key16": "ZnuhFTVp3TqfnNuMKddnANjp1LS7qKgiof36SXtf2q3TcLiWczHYupMw1yBrKSC12rEvNdQB7MyDy78cHN6bp7X",
  "key17": "4QvXzzNnkwu5Xm4fPRUys4B4fHwhEB8edi2N1BE9NghWiLNKvTuneWjzYj6JDsqCgzRqJ1Ua44g56dK6Ugrm9M1a",
  "key18": "3qCD4Lq4FKHU6V5pCyqf5XKTMRHrxcyDbmETxR3RcB5nvtTcPrcoo7Ys1wAGpcVKQqUsSTTbk2EoD9C6PTcbKEPf",
  "key19": "2HEGHzSugSzCQGUAju6ZXWWwFRLwE7wVquKXHRgFJuYtegJcjtCqkLzyvTMPckb4pr8y3FZnv5516koid8gPaoGp",
  "key20": "4PnWksR9xcZgNMUCMCEEvKSWXBzJnybNV2tAXQo48HdKY8CdcomsSzXQ3o7u1pEgykUteuaAtbtRhqTiSfr6A6WK",
  "key21": "2NGLL86oGFXonUJhHjHY4oVrx2rtGJpJBKqqyurnMKkn9Z7JBgoHqLuhVeSz1PqCJsFGHDn7499w6ZzXtSrbxezb",
  "key22": "2Un7DaNfMjNHqn1PVq75xPGM8uXF319x2oWEpxAEdzGdfgJazqNydMTGwEUhwLtJtf14mdDxSG5nTpRM8XXSsYYD",
  "key23": "3eXqSeLEWaCCfWHPkRc8JeKSiB5mKusbAtN1YFetgNQs4Dy57dbKq4LZKrbWJRVaWJo58Hr8WgbaVrucG6k4mq2A",
  "key24": "3orAZab4JBpY6dKEhiFXG3E9DNKNBjDc2ukZAkYJpin94eyuFUPXNPgmE54SmYqufqPkK13ZDwEzusiCmmaBCmez",
  "key25": "3xcSTHSwxUEKNRNN7EdRv6XipFQgNDQTGryHMfEaswakdHstUqMPK2A8shAb3W7pf3rbXrqPwdLRZ8AddjpMs1vu",
  "key26": "3pqjfxrm2d6kWqaMHapvnfWgTcnTPWhP4kpVB9m6skqpUScrFfYaxXULKBroGYKNFc6yRkozVP1xfK4XoGrwXaYn",
  "key27": "45w6pi2VVtcYZL1SfUVTkqY8QRhjN8oCotstrwCGdddvxYtdoa6jUhiVyY9kvFLYGcW41E2ZdBy2Sc7LTRfzFBg",
  "key28": "3QJg218uFBDpMezc8WXHCBmtQ9Ar9hmYzGXMnVA9ttoLY5u3h6mBcgZVSUNx8QPARPs6uMhpHxNvB4eXfZyF2nbp",
  "key29": "31mhjwoA3ECXii3fvJHLG9yqbnazRnXYw6TWBxLZr3WyDfjD3KCqBPKN7CXJy4xZb2jCFAXtqoxv3xjMBvC3T6eP",
  "key30": "567aoYAjoGoQau8PMNM1Tr3ya9C1MdE2tMrEWGx5ErBL56CFJpd1vMSeEpGXqsYrs1sLk2ywEBUjz6bHAdkcGNK",
  "key31": "277isx9PW6bbH9DJvTgUoRLxTBR7LzeuuwHRHJp7H4BtWDaj6TqixpqLHCg43U1MEAdUkHMYWsRxFNuSQutRUt3D",
  "key32": "ahdEMGbWgfrqUhmfmxZ15udUbpuRTn31amFnqfsRCQYDxyYfdh4GHLXpQ7FizWWt9GxaxqkL834b7QGxjeFAJVn",
  "key33": "61mHQojh89oLVM7ogsXceaYiKgx7GdU3fB6p6MzcKb5bnSZkZrE3MtA77ABs38YbXT3BR6mxZazf4hAs1RFXuDB1",
  "key34": "4dHbw2RbZ1jqVkSseqhFh7JmGrgXCSzK2muaVELsBMLsTRH42ste87977toCWPpCopK8iCXb3ZZcp3ixf4s5K32t",
  "key35": "39BnbKSux7qTDEmQ3w3FAmDY8xHZyMxkTWaAN2eWUTVyNcGwbQAjdxBbB8TmgmMXAeiD84uNLxFSGfNDBFAAYfq4",
  "key36": "37NkBGVQ5RN32t3hpF8rEvU4TASBtx6PRVv15CYTnrHyG5aJvwdbssWK2vY5TfJpvy8qH5xFBMduRKi83NYaZ9A8"
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
