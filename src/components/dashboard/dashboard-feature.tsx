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
    "5tAft1FqYHk8eDFQjY7d19SDHA2BzBvsKkfDHYwrRMuvWtDqbzP6A1fCk8UpFzaQxqWD5qgtwpNh7RRvvoKEUTgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AL3k25kxJmAxjaWGApJ3Mvsrhu5GqkMTdbq95x3YLtcYvHksaqoyan4ytJUi6JEkNP1pptifWqNZMpnERau8NpJ",
  "key1": "qRUx6rKTm6bR6N5aardTtKRXyYbzPBNvNcgX3TWyZDQvEGXWRent9ZzFVdQ6gYstj3fwgD5gNH47viftkRZ8oYS",
  "key2": "3EJR1xW1A9MecgiKWECHkZopYz4XfrU5qYZ2wPbEeQhmWCmhb4qrYWnbQmGYHU9MM7voRaQ7Cfn7UTTALTs211H6",
  "key3": "4qyajScFbNy1Xax9Y2KvJVZStCtUWh518PtWw474fxmn4BWjvr4kmBreZQiDJJURkzn2hUEFd2i9uwdy3Mouk2Tw",
  "key4": "2vmxjv4xRrQrvAjQpSVdARdRg4UYSVE2TfW1aZ2G4gwsKeuFBrdwujEyJ22DNkft4nDn1Aa2g8Xg1EFaBEqPHFYT",
  "key5": "uaLWbY9cMqmYUuR7j48yK5KsoThRfyDofLp693GC42QmfRq4GWHKm59CajqQCTJrd1SAmzuNWsScSvzseugZbFp",
  "key6": "58c1mJJHzh8cv5zPusghmAbppnP1hvr5MuQaRxrgGuGddiQuhHQ3bGq9zbPgdVpJEmA261KyjCNhjz8FoySS6WPW",
  "key7": "42C2oxAGF1dxktFrtb2c98QFgJRpY7NDZc4syRCmmYHfhtfXXjEnpC7PrkfLDDtSUwxKQqYuoPeJCotb28tJrxEs",
  "key8": "3BzxPNfPiGbBGF8MbNTavTKLwvst4DZ2iPNanCR8X2KKjJRwJAwgXHMafLoxfzt8LynEjSWAeWz6SFGb7EWxvqqM",
  "key9": "4pTaRbGgLpzSDyxkPMmK3xZN62i2BvMAeAHptdwRTARg8Zw8J3efjEcEGyoVgmwjvrvkR3AipHjHS7jLjtYX5HRy",
  "key10": "2jrR1VdsPZM6vSknSd5XJR3maVw1bmcyfDKaide6W3DSDeSxn7Qi13HwJ3nyYXbKMM53QVBdc6cTSZZmSdJXzV1D",
  "key11": "5ZhzKpf6tM3mz2yyCDv3FY1Tu2nPxinnm6wyDnq7gnjo2QDVzzjhAfYcEfnYr1j3ht67HuAeydJ9qamrKTGwfbia",
  "key12": "2rkcx2YvZPqqb2jaPvQucWDz1WuTsJZCSQHKH9A9TKNPJHuoTBFM14GHszz8vvHSypZ4rRfCmjEjDXmSmsivN7b2",
  "key13": "5ZFHwoEFgSDRTrYWby3FKeqAhNKt49tJi5NZoNs5Fkhi7qURSi2Ysx5S49PvdawbBqWrGSwk6j8RokQsm2pFu3vM",
  "key14": "2wuBkcvWYDbQxBijYqYGQHY8EU8K9Ht3XNGdzRHHjsmjo6hKojsD9G3cmTgXzFozg26eSUDHEDd2pZZTXebKGzKi",
  "key15": "3Ttnr6jDVkkqa2h8Z3xXqB4Wr23khuKPV5PHHZrSVhPFdvbxCBgbWVZTyRUvTPWKruKu4cSjB31QKGizsEF3GSXy",
  "key16": "4YaBBQtst2gq42R52WM4Qhya8DSKFMePZjCw3vXyVSnVnudssC5VJ8h9qruFBhfx71fUYmdWDezoKuDmKnQf9NPV",
  "key17": "5JHD1cmnpZ9gC5S8jeFY5mNLeX8e8YKhCtTZJwiLt4ZoT7a4LS9CciV4wtjA4bUcvprWrcbPkHFCTYCCZsCWZVzY",
  "key18": "5rQrAGRTpY78N5BPaPspxGQpAMGjoGxtMWBDmHuPcobJhMJxJmKycsvwoMPWJ8GJaKJ3HKFKLcH8UWumvsWEvWrk",
  "key19": "zYXwGj88n7pEqypivrreN6r8Sd4QaEWH7fz99ux3bqLxknxphLsHvmRxBbWVYQrHidQfGXXt4jwFW8X9PmX18sp",
  "key20": "2o8662myQ2XSP6r9KvWy7Vt7zprB6eTrqW9e9JMX9dFDQEsJizdVy2ikJBjcBfUgDeM5iwF5tGjv3J1E5rB6Zbpu",
  "key21": "254d92dHsYe8T76ERXz4a3XAWa2S4W9dT977NQhKW2twezpSZsQ7ik7pGehvu5q3mPdndp8deymE3xeMPBbkM2GF",
  "key22": "3HmrkPGwqs8exNj2q7LF2MkzJUYsh7dEBuQPE2qCSdGFmAUxnNeys4jVKBLaNebYp2Evg9AwrmBy7RhZUZw6m43t",
  "key23": "5PWq6JdgmFxMZaQqGfxLyiG4CD5mWqzBHeicCS7Wn67B17JTcrTQfep2vCTRZhaYvrFqUZDFuMCkJMQ4VsrtR57D",
  "key24": "2PVhz9oQ6fawMtEDpqnRngcUxE3xz6aWmCig9udyFRVhbrGi8ajVJwWe1LLkWaAgtbySN4WTiXiHGwsGEX4WRTQR",
  "key25": "4VhrqbNMBt7oX3CWuebZxnqnhpzY2EBf1spZyxDwvuHcFgAqZuyxbTKnXzqQJpunU1eRCRhS6aEmKHpYtQ74hUdz",
  "key26": "65cKq3E1ViecAgt6vFWuYTAg2EBCKLSkrFS9Yjw3qjfdPVosHp2G7wEtwUAXVLRD3YCfKyrq2KzDZDsdj28pBwqt",
  "key27": "3eWz6FYQtfqFqTNWHTrUoYAvCzcAmKcR7Nye6joXMQCRuabGA6an27D4rj2hbVuV7Cn18Sstw1nTudLxvXixxcDp",
  "key28": "4gDQ1mBBgyigP8sphWNSTSUenci15Ag3aKaHCPahitf9pKYs3NWjne5WCURE77rjQ2Yicv3zhfUFsX28z4aFgYRB",
  "key29": "26SawK4V7KFxDhgMn75mpgg8FrdhcVudpvQoPLQ1gyEWX1WF2vuUn5hdoLcQP8QvXC8bMSacvfSteHHiw72tcsFB",
  "key30": "2CiuM4Cyb1u4LCDF3VdkHLW2cXZifN4QzinrBAJnBRBPwm2v8N9oWKY6JzuGy1ZddEtVA94BMAcTNXd2V8WF1WTx",
  "key31": "2XGpLEUaDjotkdoYKumJt5Mw1uKo6KJjDg2LXr31NAnt8gDjWyXoaVLTcir74WN6PrdDFPj8HJBcMtxj1qDAGhRK",
  "key32": "3o945rH5uus48eCc45k5GaPNzt9KX9NYBC5m6A93SwBRJ6RB8c3r9prmfg315Pmr2AEriP1sVJfFdeMyCrrjretB",
  "key33": "4SXncUruPL8MvSFeEF6SzLsEzw7qXCwyb2ijoSLGsARo31C6yJQhYWw3XwmpKWjAipxNQoLy7k5fbMWER7gJxySv",
  "key34": "3utgVFsMtKTTgFofaQnnYjeLAG9iTXmMxUH61bYR9L11h4gdBnWvFuouMMVhMWFpmztDQKkEvBDkCyC3zEcNxQhf",
  "key35": "q6QiCfsB5oTTLxipXPqGvsAKovnZNTwTseeymYG4HW3E9PRDq2fe38XbZMfoLuxiHjpPH7WSk2cRW2EV9jnk1BM",
  "key36": "5SQYGZf8N64qsDdKVZzCAueT5odGZFqSjyo7nmUgBpio3C6Sfh6ufNksfd5e4GYiThNfEV25YYHvTNfGG6mniDgq",
  "key37": "dRvWMjfPa4BJWBFVGpLP5usEJLRMX4iAN9uAE2GCGCXGUbQdyWEVddhoXwZFC4c7yjGE4Dqdo8uCMQBtP6hU5Jx",
  "key38": "3rN3nJCQv3WBiCan9XZgUgJTqxUPjrwSBfy1eBVkEL76JFo1zZkPLt2kAfFLWpo6Qj3372PdFtQ9SnSvhB8DbCrg",
  "key39": "5uirckkajA9dqPMuJMyXPrJMArsH8MQ19KiDJBQjByKm4AZToRdqiwSgaJMnnNCPoB3Ksfu83ikerhD8MbJxrbf7",
  "key40": "UaXhnMftigcSDea2Hg3B7mSgkZoSQFk3xhBfM3eLvHC6dE6bnBoFFSFkgeh5R3jZRN5zp3DrquRDe3rNTNfgfHt",
  "key41": "3Rc56LzkJYJhdB8NjTgTsCrCxdH5Ttudz52ekfn3J2t34ggo4KgLeW4hNR7FUstH59638HZuS2jzCeZ6EG6qBCpA",
  "key42": "5LY3rmBjZCggP44ycApQvwWqdFcvpFwJz84Baw4WStjgcjAYpcJJa93D7tT879abrupaLV3UQ4QQjfmvKPksafAn",
  "key43": "52xpf1jHJLpLXL6yi74ueKELXi7coUWgTyyAbXcgbEhRZ93ZuocswnXpmR78eAPoYizeYZwv9CTuqMvGoiE7r87K"
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
