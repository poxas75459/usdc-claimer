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
    "39jtUZxyPqEhjbu4Z2hzu2bZX4B6LJuWLfDViHhSQo3ju4HihmDGtbvEs2Zq56xEEwTLgQvkxB9U9W41N4H6A9wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jARb9cJVA6oA9VQAomx2YEM2kjLhxbKKSHT9JmvkwxBtGJ9gMqMqUu2tMVzKZnjJ1hv6xSLyLBMK9bdF3JrzSpL",
  "key1": "3Mn1giBjCdE7HmzQLtjfZaCeToBx6R3EhPCPgND8k2W3PZ7fVVnvcP5AtUpmiT9ZuPXwdceWNmzBx6MceCfg1cZy",
  "key2": "c3PDy7WgQ6j3okrr3gfqF8LyMJ8orgfGxj2ag1nhBqEG8kTK9Ck4WmcUfyjG5Qq6L4pWyjovCB1kTrPXisVij4V",
  "key3": "2LRzxaNrnfVK8zadd3dvyzx6DTZzRMhuXqq2j7go9bffekrmx3inNA5YCMEAYzX15H5ymurNvE1yqq3KgwaoXfJn",
  "key4": "3XWWy6bBoLx2co4s9Tk1mhFsg9wrwtuPnDSC7E9mHb85AxzxqrugssqPE7WxVPJxch4YvU3G6EekhUDWJKFmZEHv",
  "key5": "d2a3qNmJa5tsS3SAWmAB7bb8W47q8W4ZZMppqoJjtkxT9ZTNMgi9LwZbdg9Z6TQ6wrKwFQHGNGtBS5a7TZ2WrXo",
  "key6": "5rsKZvXUcVsFg7r24L6hWUTHhVoHNPz2E2NSKrjzJBKLGeg6ASNWiWiDiUjZkdTaLVbL8m1Kh61nLuUgNMve8CQ6",
  "key7": "4SHW5x4Fu4WbRAKuJEzvXYkd7UcQGcXDDDjgaLhofBToHsF78TMCfkbFLSMBAyAWFMcvEMTSMqwQHQESLA2SFC8T",
  "key8": "2nFMGPVEs2WEbDEuzKaPRPyaNjT9vsjjiVCwpRuMnPfgSnNrf2g4qh54bRvPGKU6oc4ZpHHiqsFKU62jQ7HX7fyD",
  "key9": "2tkBwL8bSW5QjD1Ymq4rjvmo1zhADMkMrZb6BGaZ8vduHTFD5QTtE7QZrHCE27ukokcj8hMPzUityTUUiPweEe6e",
  "key10": "4ESXmpp8FqHJGjBgYMZhQ8WPb9GJUJLPqyJNLgRF5wwUeeKpwAtW8jMoTdQJjN4BoXS2BoEDmVLEv2BDKArfVTEE",
  "key11": "3eXAHANWUqc3ZBXCypWTMmYgEevs8jkdjz8gf4om7Eyfnwt59ynXKXUqKjGHKELKCDVHb9LsYbJyCsXbQqPhPspY",
  "key12": "2YCnctKgrzz2NdatwLsBT9wZADWgrhvxvHiHD83B5S6dq9woNuvsrmAtneKHFsApv4EQ5r17SbEFSZAcRV9L2Niv",
  "key13": "4rpuBkG9pp6HurZRdETFWqfo9y4eLLZLs8ytnK4RfoXD8owCVdvVeVK361tTV2HsRcdTFuwkwciFA1d5nqpdW2CS",
  "key14": "4nfxA4JEUk2QHkEqVtoHwugr9UPt9fNvXs3FwosDGqrdm47pn8m8fMLPdFFkxqYrrDJ9N4grhejxZDRHkTsgwx5P",
  "key15": "3NchpPAiVx78n3fRtCGg1PAHPxn3NMF8U33k6HavqgDgdcDduP4qXdcv3cjBnZSwbraBYHhEhCVmGo7vregqGRQg",
  "key16": "4SrzGTiiFUBXBUHww81cEwQFaXA5y7vRbBstTVeJu1JhFLXJyWUvxTRBJNmz5V4V4uvRpULBHBqk7ZXuravz5rgu",
  "key17": "4kHNpWsbMyvA7Swqcsah1DmGqoX8tDvAA5P38YUJk4H9hmHDjrHnC38j7VkMXt2pZnMKVqCvFewMKWV1pjZz6uhy",
  "key18": "4axkgBkiD1oUhzPfnp6AkGTJzcFrTiw7snbqrwb2odWKz5mUMEKAEcpr7kriSNg9iwXZrdWdCqHXTqHK3QFhxZKf",
  "key19": "AJwNBbaXsDSU7EF2y3aZvKJXaVLDMGnXvYYBKNjHqeUndQBY5AeVd8FYW5FYF1EnsjheAJC6v3Rc2br2moBX1C8",
  "key20": "bCBtDDbCFLh3eY11E38tWNVyGeDuDwko9DgC5Mhmf3xqCidfTUQ3ZzChFiMRLMFA7rxgYfMyvn2gYUXPxuHgqs7",
  "key21": "3q4MZtEN6gcKsie7aWCNHCPgEXbiybC4F2KH5TN7fQuqTf7vtoTMY84CmvEipGKuvzCzEkG2fMhDi65PZPX9KHJ1",
  "key22": "2qT6R6xcxpAbLsHWFL8tVPNFwJvHimJyWErvML17dfSmitxVx2A8NdPXgMJxfx2W9x3Tdeijd7MqAKEogtSdwhNi",
  "key23": "4JautqYTPjFjRt6h9jA24SpseGrddUSQsxJWSq5mtdYFNVcEr1ftRsrZR3iZigBCSBhaMcqZx7KGjzFfqS9gyx2b",
  "key24": "3DpmY3JsTK9mmwaejggGS7RzDtdQ9hD7DPer63JugEPp87jj8mbFN2aAxyKmgzfeFmaBeNQBxysZaQYBPMwsTB2f",
  "key25": "4t3LiU9MJXCvRgea4UyCHgD79wcy6dwQKcW3KGudmeTQbj3kwavGniUYh7eauCbQxRCk24juS6eQiCCHeL38SBf8",
  "key26": "3vpWS5JHt5U2HUaqVHxHGhxkHcFbSR8kefWWv6x2CGp9wZh9VS6N5sKL7xo6qCNeD9xc9xjjdqnM28XPo9xvCxjP",
  "key27": "2GsaigHyPzWncLaLRzZehnt9e1Wa8dxodVZxDPTxKbMZbMBAgJrVjXNovGDDqs5D27G4yofmFiweXCbc7KvUtHMg",
  "key28": "5DMBhfEC73zP8K5ASgWorksgqmYsfYoqz7tnFxtPRoXLN2NrLKjrZKJCCr7RFzdBJ6M4jqxXz4xHpDRLZzWqoccJ",
  "key29": "28bUmxeaxGExehbNhcUiGXXu9SRF8SQNGNXqLgKN9f6GeujFjZfR4HqbeHB29jytykBNYbpLwBTtPq9Mu8U6WuiQ",
  "key30": "5V9wderg3Au5N7KBnXTJSZ2ntVrDBng64XvUhfPCS4XFDZhfPGxbhNj71YMKy9zqFCZGk6HFLFZrMS3b6q4kXEa4",
  "key31": "4FsXwwEicduKpXrznzotEBPsA4J2ztADk92aba3AoeWVaxecLniLhvYZtaHfJxSs38E79BGtHDVfrPHYV2W3nqX8",
  "key32": "iA8URWWEiwyQosVTXTaYcDT3A2VzCRBLYXizzwFMZqMSF8UdFTSgUQo7k7RF8q36w71DPtoq7ab6MSdUubm8CaX",
  "key33": "HKH1TVKVazMiQJAhvRzfHgDjeMQw2LWgbnYnfXDqJMN9vt14hbiv2tBj1c78rwF6PAB7kQwE2h88fkqQSpdBvSb",
  "key34": "3GQnR8yqjQQznZbK6tVugbTyyfcmdbM8azFBFgkuLS9SMoiwqSenWCp3KbvW6KZTiqhn2DhzGxKAYmeGtsVTmT7f",
  "key35": "3kS3gTfpoihy3dMcDA3R34zcWDZ8XB6VyptknDs6xN4k3cW4LrUnLNpczp4dp3vckB8kiajHdGyWnRexCgZwFP4r",
  "key36": "4WRCREBatA6R1guVKNosAQR9T3jFanTuV37oJScZTdPuuWRuFtcm3LEsbginsKNfDcTz6AUZ9AzV7KUPCZQti8vC",
  "key37": "5TBfJ9RdvV1oYoifeQ6Vjrqo42qEKyrkjhGCqK3ji4ScxW2XL2GiduKAPktApfpRRs88mg7hPCN1CrcWSVNjZWNf",
  "key38": "4UG2TncWLgdzBieJuRWUjvDv4MypQomACbV3SpeMLdEHF9gR9L5fvVdTCfxc5ojSCDsjQLYriywQCm1ubY28zfq",
  "key39": "3pijQvsTtRt1r4WnCskvBSANHTtoJJiU5EhLaTt6MdifA5EgRnXsDGa8cboP55okXpdFJdLiLUm2UgPPKhyp1QnX",
  "key40": "2XA1Dr3L2TCQ5NCPuD3GYqAr91DzHKcoNbYmzDagaa4Gys6rdnwrPX5MYAZkNDXcgGBL29EDjf2fdJLm4tppYMvt",
  "key41": "5sRVaBDvZoJZLJKjH5NHM2WJfjp1Gs7ugZMpENmDSHC39Lfs2Q6vvjkTko8jw1WceMGoZU6ryuvhLWwhJMgnhREr"
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
