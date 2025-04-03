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
    "evZwboLQAJZYYnMKtzvM3fMDBYKAdJb6whJaDXq38fADRcNnrs7zmvmKRRM1A2eC8BMwRf9p7XiTipPis1iKr8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECfRodj73MvDMDqxqbMnAibBCepsgRuFCjKV76TdjaC8XiqcxjHGbdz26bx9633jirekvwPzaW4DAqbM7Wzmgfd",
  "key1": "4k5HV7QM3DVZxrkj3hZZx3vwcyNgt9f1XQDEEewUpm7mheyAuuvSH4j9LZ6wZETfpWc8UowoysMid2K45a348YBN",
  "key2": "4GBdswg2gC4aHuDMFr4f7pULxC472sYyk7b9yB5bb2gH1h79eQtVdZjnCCTZR1PPEz8Vts5Tk9mtz7cJhQhaVn3m",
  "key3": "2kKSi1RoWcFsrWNS1GTNmiidWCUh8YdXewqVf1QGsJAUobTH8iYSb2PF9t12gR1eGhAdr3gNCAbrhAaA2kyy9YMd",
  "key4": "4TJH74ZL9DTzqTWD88QKReBegSu7hEK8miJoTqjdC4YiD7G2j2NWS1zyVFYBEnf6hoFUNkgqptKumJLq2DNiLsu",
  "key5": "3ZTFURt9ZKjhEUFSSacJhGdEXVEQdv8nvHVfPyxqPrwNRbQujez1bZ6p4TUUyJPSimSNtZqgFyqN7eZ1indg7SU2",
  "key6": "42VK25SfNK9tUMkWmxxsrkaVgowBoTGxm9sXNaDrhAtqsUBE8bxrL88JC1xc2h6QeGSSFxYUTs7rHNt1ZULjDiWW",
  "key7": "Krvh8Cu5NPVGp9qu73FGyY2ipBSx4NGKG7xWjNhhVAiuaJ8yXUHpWTcRQvJidoc579yw6TtBrEsKWDDBpS5xtE3",
  "key8": "2L84sR785ejSofCw9i2XaUWaLHEZqYiTeEzqwGND97ATqXrEvvdUpbXGNPQjUyxuJwP4F24YhUCXmqnLto9RRsFn",
  "key9": "215K9Gjq2JHgxvzUbSmRjRpiijMKxmkgjWbNtwrbxmnca1ubgJAuc5iZer6TnXjkZkQtQCvj1sGb4NoRnNQSKKBA",
  "key10": "2pSyDvHP5FygzB3AJCfY3xEqdxgGygZD7gBE92Eui25Nr5d8yp51T7BavGYWBRP4RpKTzuH9rWLuuLR2qo8Ljwb6",
  "key11": "1H1rmSQzGXgC1KVWogSJagHLAsP49UDNBVWDXUqyaLbZrEjA5pYpNPVvBcs42Y8Z5q7m8ibMP5G2gdrqa3ieXnk",
  "key12": "4pJcrjuyfAJ9iyNPHY9P8KiF35RkyMVLPTMTggye11zMF9tRXf1F9ecWjBUbbPNejL2XXtj9f3SRqnH3VFWquEqQ",
  "key13": "4s1tTLTwwG2FarNsBnGAC3ZYXEDxwhhPeK9vS95VJDK5RWvApeV3FT3KigRgNJQmkFsZ3u1PZnK5TvG7JaVVfjgC",
  "key14": "5JKDgqSZhShWJNWDQ6xDDcif7tk8vnfQuqJuZDzJiV2BfHbDGNsyJmox6EtAtwDF49M3HiAGCkoUQMpfWGTHj2ua",
  "key15": "4Lvvi3SKPNPAth6BFPv9zLEJQCMtneqFCZx7JrU8wUZ6qwfbvFZSFM8qDkiQU2751upLaotjez2qY95RhfbSFjm2",
  "key16": "1z59Tn4zrvsjLzzbCfk2WSWzebtFubs22Vstc6ZhDY8cXeYVBhp5B2oYSZ16AoAvVa19HxTdXdhBkfZk8t7KijG",
  "key17": "3UnKFhtrgvwBJMxka4cspwdsUhySkAudDq674J6aDMQjwTGzv8BGqZd2yAYFeBFJYoF2tb64MDvLUuBHrjtiNrPi",
  "key18": "FubfPDsKvSuNvtxFVVqUPrJseUrzFqHfErb6DYfrAzoDhvg7fBWLsceufkRy4xrGRuwKfyVqhhWAvDZXu6hcTEF",
  "key19": "CeHEeDkSEHBYKjPuwouropocRJPC7zb9ixKjByAVZCXJBpd8meRPWWRMMD6qG6WmMMMcwM5bBikEiLZijr8Ejd9",
  "key20": "4mRLMqrnS7QdbCnLNW8mrYXu48ApDSS7AdbpLcxbxE1QDhfaFhjTbr1RzpvFproX5MNsg48uSCHdVDwkYdcQQCmR",
  "key21": "47zERhhib2t5Q92V9TArdiVaZSRMFGyarmZMG1XLX8zvokL6KRhmbkwGJr28GmN7T2vWLwvdCu85wyeanFt7f4eY",
  "key22": "5FBxtskidZbPQPn2GjNo9aMXrkubbnmRY9F96wgNj8X6raLLmmXFg8viG5r2PbndicED8w4BkFAJ1TTs2YwJue7A",
  "key23": "uH9UxyEDqgXbG245wB6FaN7RWpLAazWvew6A5x44JUTwN7zLNaFNEM51usYtREaNqX6uUEpooXqopnPkTF1baSd",
  "key24": "2WL2P6nyjsvuFqEPkx7DTofzuwbEECg7CzxQy4z54oHT2PrU4eVvJhcn4sYZH5b1snLT9pfsfDHrYmp8jTcvoHAV",
  "key25": "fbk1i1ccGYVHrh84zALuQsGqWdM5fSaZBAq9WCXMLYMiGX6FTSmDJtz5yoGHH6MNQHoNYmQgfbn1PnU2Bde633k",
  "key26": "42irahRLWd7g9NYz72NRNaMCDUi51xEvxVNUxKiCrRDEGvUi4kKuhaWc5SjevJ4auKczEwVsHQEgovP6snKpjZP5",
  "key27": "2s3KvcHPZNaQbaFu2pWsgbaYQAQANx3E9NCZ4v7zdDJLuZdxuRbYoE45n1NriphQkvU7Xmc52wczgbAnpBbaNjjK",
  "key28": "iAm1VWeXaMWgeqnTw45byW5QJaqxLJx3eTbCTed3mpCdmHoW5zkM3b1oGcekEa4qLte4QkmPCrrAs5hgSUJHuBE",
  "key29": "3zdF7acvouBTsmGUpE3uWbR89yARVyn7cLYbsktGydxbSEarvPbgMyQLqJxUijyiUbMXY9gdjqiFzPuXc9T2YeAM",
  "key30": "34fZh5KdtmincK2RoZ9Zx9FahuuNFWmyEbDKGxW9W2s8YKnjbYWpDju85ZUDMzeNk3JW4pLLu765Y2KVkaM7Vuw4",
  "key31": "5QcSWuhxDYTBCEMZg1PF3uZTFkRFJxGnUv8AX35M77W8gT3skwnKVpBvNByXuGELBhZ1WxNWFBhuQ7AGPuhiRC6i",
  "key32": "2DXtgg8CZzDv4Ae1L9GvK8RvFGNrDb4dVvJ1KCSUV5G6jhuXEoSB59gDSAjmxkC3xj6HaqYbPZGcNHHvUXZLNWDD",
  "key33": "4wyZDgBuxhfxhumFtXJtzQgNUyJk4rHp6BUzy9XZvmyjw7EAMTjCgTYaop1WWRiKAbkommAp9xn6etph2gFcU7ws",
  "key34": "3JzNEm9594vS9ohX5KsdCvWzbEkSaQrDfYitAVAj5kiUZ1Q8FWnoBWHc1TzYvAKPrDf7kuBddycWhgaM7A36jZTa",
  "key35": "5BLwDtpXvpu8rBmUUfMcM8E38DqLsT14kseHBYcsYT9jruZCsAcYEbkLZ12gZHbNQLJcu9WUMvhaCWbZis3FXBG1",
  "key36": "4X95hQNcGCkxMPgJPmfeijUDprdmA8HpJGFwrkpBjGQL2SC5akoXVx8YmCyETG6stVZMK2oR5UQqbU2SZnbxBEpA",
  "key37": "2EXfaGbUW4DM9dkK3FARRCjmtJgn7pREQGxmRXAL1JFs83ZobeuJCN7YbwvZY6Ju5FhFREa5Na9aPoU6NAjisAeV",
  "key38": "41xGMJ1BrtSjukVjDMvtJN7SeyqtC9eDsemSuiz66B2XeEfm1HeQtin1ka9nSETifMxfjQcys6kKumhYPhaoPRb9",
  "key39": "4tndw6d39b3gTTqFkB84wQ9CrtBWgi6oM1JQvtJ4aRqup37ZonBG4XUwXGaSGeMkvdqxQuL6HmCHVR8EMtb5Dhrf"
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
