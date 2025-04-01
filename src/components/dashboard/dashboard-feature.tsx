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
    "38BWyVKYfeepNQUyhcap6GX5AoBEVdYCnRLjkmyotZgFYNeDqokwH1cpyTWRSETvgrHJjweFkPdXPjy8db8mB7Td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bc2UDrW5L2qepCEodnBMoajWjARcedWpGXXcJpLF9mqKuBu4HbxZyMPwX8GRuWQqzxYUnh2sLfWCGofvxhEovvj",
  "key1": "t261nCnVeota1xsVd2D5LbNFpudoehc8yQMLucEP2GDwv7NfCzecjPm373zndoH7gToGqc23tBWkqM48k61NXPv",
  "key2": "2BRrxvZeUkSbusNcNLXfVFDjSb4mQsMJJNr2jRDRtnZmzA9VjdTTSSA9eTYdAJ3LM8oPVC1Na5sHLct3yFJS7tTh",
  "key3": "3n9mYxDWEAZT8h96XZMhVmzJakVoYWszw1E45xcFzRpyTxdTEHx7TjhYB3946xYPLmwDwbGFkWPcBb5oQNf3PjPL",
  "key4": "3g7XYSqMSveiM7Du538Z9G9SnAeXdw3KtZT83cBd11ZGgFUX7sDyJ9ArXreD3KoDHNKBFwiimwtwr15XqJ8dqAJi",
  "key5": "3Ra6C99M3YdrxE1rUH9MwqwzEDVJen3eoZm7AVWyQ7p8vVQtmv8o1uztRxD8jykZH4UpQHb9mmAoEa2FXu5BukEq",
  "key6": "2MAVpn6LzeLdk6JxHJhn2y2zGBuByxt8RN51K4xKTWNiFbWH5sw4BN1EpMCv6y3KNk26RfdKiYrr7hHFijgKP2Q8",
  "key7": "2EWRZWYeRafqdVoLUHpJEcRz9XYXCh7KvP3Z53NeWT2LSAGe76AstZ1a2rtgberPyuRmgabMC7sHoDjUuMrDPijM",
  "key8": "5W7YQwrTpd81vB1w7YQdPnTnqZeugGjKHsYKBZkkBn5bCGqmo7pAucvWb38HJ28FN4kpuXdnpofve88greoQERmN",
  "key9": "2uPNp9bbzhWeyrmLfk6Up7uZRKeYnBiB1TaMFAbqWMkqPWZCTh2PxerJLNQ4n3hoC1EmZTT7xZ5j7Ym7ZLcciEXM",
  "key10": "5pvaA2Bt7BKYXS6woAo75u3YQLkQbDEGC6r2VTdHCnQQ1ArJLAkm8izWXZczs1pcwGuustm9TRgX9amzVPrCkPBx",
  "key11": "5i2S8fkG9quPSYTiiDE3AGi9DnFw1mdY4eagwPPkFyuZ7xBvqUTMA4QsCKKueVLgWQBPLVpg9iwxcfqLei53XWU4",
  "key12": "2MDtkyLazKvCfHpeYyH1dabxr8hFWmeAVS5hbLhbSNH4Rpip2L78LSPB8GKQ1nJx1THVPuFzHWt94JEHkCzGqsNQ",
  "key13": "2tRw5T7vSGSUR7Xf2g67U3B53bF8iFVgrEqhQuqMpv7T9WVVAEUUQtBFPPDDZmR9ZsN4WuHrwrscaY6QJ56Z4VtG",
  "key14": "ztHKPVroqQ62ktVhhotKe2NMAW9ZXQGKXxKnGyYwvLVLC59f7qNLGjyZeckrXqEKhLJqKBmu1GqXMPjSCuExtqZ",
  "key15": "353QLAWTSKTRjPXJhn7ha4dyiLJUzvJzFvcimJ5F8PVMfJG2CLPjyrHy46bUVQ8Egekje7DEuYtGhnBMNEu8qUJb",
  "key16": "3U2MX7hgpvrNEFtXdgXCzNiCn2CwHoPFkHFUaYh23N6Juac6Nny7Nhtjq3ipEa4PzN51sTxHakrzKfvVWKb7tAFv",
  "key17": "37q1JZKP1TmxjUFA31DA8hz7QhQiEqwf6SKRwRRrYJMY6xhfEW9FqEBoarWg1bnA43JhQ3SQssrwhxJ6mLY7nmQJ",
  "key18": "DSkq1YCyE56URYNwbNemD1S24djaNm97nuAS2Cbm1mVMqR2qxh9E7yEzsXXvZD6waBuVzJFBckpQbqV4eLYDVmN",
  "key19": "2uSvrJ4xP18PWU8McoYyWajWuQq8QxikH8tmx3woVHiV4geRETnGS1JeRWCY2Et581Fmwtf9VBBmtfZayoP8nm41",
  "key20": "5crcNSiYBkSCwEjbeAtRTPUs9VZjvQwzzC3YWBsTPJZempzu2j9Z42Q2c7GmcxMyRPbsDUaomASc5HTzCT1h4qSw",
  "key21": "2YZ8h4yyct9qxBFAWNLujDoZLT4DM4exQYP2HkanH2D88ViwLBLePBFTdiHgWA4z6md1yf4XTdoB6s38B31Zr4iJ",
  "key22": "2kE9YbmoLxPQ6t6hsiMfKH46LnG5mdbkBFG9WFwHuPDJusE2JRRNJS8d8FUQvBGU5hSuwyjkXHtDBq2KZD8pSTu3",
  "key23": "JbWLWbed5VmZdzveCULKyWv5So3A34cDKipozph1RjTe4ii55mkDNCVdAq3pVWKNjWPypodE2LcDcCHwL6umxMu",
  "key24": "5sgi7AameLV1JC781oiQ5sweAnXVHd11fgAZGW4jGDsLEBpFTRFjrE8c79HSNjAosWPxutmGTbaoUgBg99NX161y",
  "key25": "n3uQYianciytJ8XKv7Z2xaAy93Ct47p29PRa5aqb8QnJwJpWQnoE4TGY3FMpibQ2Pw9cKSBKzDM8uqS4BUHauWy",
  "key26": "2ik1hxLdtaQVXh43WSxtAav6X6uxSCCix4atGmBdNDzszkvXfUfWGBpCUrzioD2AdrGEnmqhv8uPUnAiRkKovu6A",
  "key27": "Y3iCCVWD4Fhg3ReVNjkQaMCtE2nYzSL9ntN3QHm6dAiFBhXpk6kJgMUSmkjCHyntbrnyXqmd2TNGCiuRmusmdkB",
  "key28": "4ymMCH5QdKSnzCoPLAk7ZYvFVVZU86dHs4vE2kj9xJoMUUfm5wJzrcqHaQmU1YHX6UYnVKH1PTBiRG2qHpD1LAJ4",
  "key29": "635deejbrrqfSYR4ydvxQCn6G19XSxvfuWJykFisHDo2ERBVYaek35qMYcUX7CYpR56bLLcgtJEB62uDSqzq6mdY",
  "key30": "3RCQrHRfQx4v7E6C8VK1BtEepXTKdHbBfs136CwAfz23TxCSXF7MJXi3QRuT8WtRc6XEMb5W9gvYCGVoGFgkAuRb",
  "key31": "4FKB9AdRgU7qyp8CAzoGQ6nBAVZPgtyd5To378Dx5evEVYVZQusdMgUSxLhr26MRUAgdqgctD7L7omovSQSkEsRE",
  "key32": "2wQKLVC9DyQAdA8fLhcQJ31kybwNGsgWZq9g7bFUUnkud8GbhYVWwANCCc9YXbM4wmKxeWuVLBzfda8YMtVipMjC",
  "key33": "5ySCoeM6TiDTPf59qEfRdotpzTSPBLrB3xtHLNuo6E8P7FWAj8xNdboTmjSo7EhGJ6rpo1oUZCZZTusDuxxrb1Rd",
  "key34": "5aaYqDaxLkVCcZokMWWAuATrZ9A15Ue2AFncKYvU6EqUpsJuURYqJLV4h7mYT7iJXWsF2GMYp5qFiCzj5Z5oa6i1",
  "key35": "3oGSf7hwYDVZuYLe87b7nTkJxFTe7o2pm2RaPNjGnTdHnNUXKujoCH6xt9ouh3Pmr7KmUtebiuXPGFCS5vBbRqPP",
  "key36": "66GzhZtSHv2Wk4EV8E7hsUpMy22e6SmT4ijDy5GKKKasPVxUSabxW4nEQtussn8JjpjpnSSgf8QHNxNG15QRmFfM",
  "key37": "3KpuuZWeUVFoSS1zEQqpBe5ua8SEx4Esbyp9rXVNYdoqkxthATxaL35w4cMNc2Vs1pF6TaVrBhFfTFiYiRPsF5NE",
  "key38": "4pD85NwpBphmAJxTePncoPggLqkwxdWDyc5yerMtuwzRitDERK9Sk3LVDMGGQBnTqR7y2ygyNyHYcq4ob3sLsbc1"
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
