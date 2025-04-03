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
    "3mUNudBqH4feVHe27bvDeMmSaki6RjEBQBjQMhAEUQm2jKbAXNCMidC6WX9JXJdh7TM9e2maeBWeTez3AiNCXqVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zkTx2nJtTLP4xVZ49ag6oc2oZRaW8Zf3i2QBJ9jtvogA2HRYyfq5rhbibKGB8E3YVpdrvoe265tAhogiSQNiZA7",
  "key1": "4XT56FqcVgWQENqaXsu6hdFkoHgLH5VKx6saF76ZpgY5u3HRwdszQ2utyAFygkEXmrSpWMeKE34pYuMMwbHGU4ZA",
  "key2": "5HBPVmhpD19hoZXbTgMtiYwtE8k1YKybDoQq3kJ2Y8RT24wcfV6x5zPBuQ2nRfVpfhBGwgLsr22VQqGXN73Ufavr",
  "key3": "53QaPhU4yS5A1wzhvnfABecjNV5mKjLaFC8YojfyQNCEvaSstEHkkqG2vRqxCFpE3d4YDzAi1a1PUhTY2s6uXZKq",
  "key4": "2wddAS8Fv2nBpyJL2rUnyDVGRFGMx4bjNshS8Zi9fT8MyGr5EDwyiU9KS1g3DausNMBSEyMJYPhnZmyfbuGhhoqU",
  "key5": "5WzT6sakEn9zkbviQwY8iUDqJgradWqvLdd9sqLHDFC9ANYF7t6enSmxpUxBFXGinWJXCp93dzERrjAaxKcMk9aQ",
  "key6": "QQsxtmGmd4cJJKD8dN7jf2Uxc6kzbT6p1VmZfCw28Nf9u9FdV9Mh7HHc8MCuiV94VTDcckSdrANNqKo2Vm1fvnE",
  "key7": "31C72NHG3Vb3WdwFeVMv83KfZMhnb4LWhKn2ZxokKQ8P2s1fXCcvYVvvKbnvdWuVXKi2Wk7gMrNLSVALabhBUzhL",
  "key8": "5WzgviesxfAN4C4TmmsLUKBXrdPLBsqU5NgJyW4YzJ9ks4KsAWkEuLZMo1nsMZHQpQ4kFEQp3bXqGH3juZh8hjAL",
  "key9": "2jmG6YRNgfJz659ZBACoiPAU66hoEXrToaHAQhkoXqd9RpMSjxmLXb9Yuh6rbhJEZ59wnVqRg2Acha7ZpDii8Xbx",
  "key10": "3b3149Gecin4kLAdDmSFAcARhNk2vq2SRgYq1GW2VnXqekwjakmWcHRaBkFbBAWma8iACENtxje4ahvZRtRqHex9",
  "key11": "2KwjqrSzNqoRMu7QxyZMXZgMHjsYAVA456dPkufcxR4xDyvk86aHtStUVmduJRAoF1eqXdx3pBHu9isvyBaBnsVq",
  "key12": "52yRn43GgtpqXssGgaYXC1neNVCjz94136tvhLnD4nvRoGm4hWfCFV6hvC8Mh25Ac5Kww617r7wmQ2NvFcjWb64z",
  "key13": "5BRXwfkKtshtnXXn9sykzdkShWJUTVdQSNAKfxuPYWZsU7iATV5oS2WE3HGkPerkddkdUBRuhSqnrkWZrLmpC6Pc",
  "key14": "3iS1djJNX43BasHppouDoPktzaNeG8RpVqAnniT4rAF6W4aCCQHVi9gbuKua93EwSLXocy7ftJbfx4p1RWJScp4a",
  "key15": "67Uin9GJmeHMiy7APhwyNfJiNFWy2tZc62rteWNVM8D1RFQnwSdWiNqzNjxtQeqjCakyeavkwqUHTcdrqWy2Weao",
  "key16": "2s7eBi4N5oqYchjUYrNajymEWQtyuLCrg8P9nV4ooAs4Vz92Vkr49yAHhyP1R5AJHABk8fWVDJo9bhQsGDAeRMTC",
  "key17": "3paS8he6uf6oKZwwFekCskFDPv282uZwcXsRE2uz4VR8Fabvzoc2uBWeD1AD3rsYxkmK1LAKXoBkBs2fLRrVWe6i",
  "key18": "QbGe9PSCrjVo5SqQ4ftpkCwZQhbRoA4JpnQdHbkvXNtnJM5kYfNq661wyaYobufkEyriQ4vbyCx1u6uVauuU7CQ",
  "key19": "5aVb5ppeqxgpmXQFGqmdWRCTyyVHssYA77B4yiKChX8v42wtYT7ajgRcQ6GogvMKaRnNUGLp3CwaLzFEFxMkJjDQ",
  "key20": "3KYCPw7HJAvPXzUrjTCydNXii8scPt3ncw3t7Gp1MTkP8E3Xs68YLwYMoyhbudnF3FaozRoMWJyWUXqiBStfijz",
  "key21": "2FMQt76vYkrqz6ghdiQyczHCbi3apg8YATB1y9wZZwq1HSvKgMrVuJj8ywm3Skbeg8iMGqARiX8spygSN8ubhcaG",
  "key22": "gHmP9p3QUo8SLHTPvPqzzpFCnNoyNmqNxAL2k4YFv3GggtgnFVKRk9kY1ScDg7LWqJUEupNZLq6YkZWrbUWuLN1",
  "key23": "5Mi1wHiC9JGWhUtKMNZFotP2YwHBZKiAhynjntMfzMXTxo5tZUaPEMHvrSkLeDhH5A8vgoaR4MmSQsZaHQBytf16",
  "key24": "21XLseJWU975DTTgSiScBS4SytZ1NDs3687sa5So3oHhkcV8nDJW9JVmS7ASXU6yBPryii5k8QpGR9SWP8YLyD9o",
  "key25": "2hMFDm5FNk8Fe5WbR1GuWPLaugP4Rbz3NMkzZfo1W2uz34j6yrhStWLrwNoSUz5pLd2wp713AVyectUy8ojTtoef",
  "key26": "5Pqbgo8Rb6HS2AQN6MmxdJQBA1H51D1zNgNEHrXZ1fsAXiVwTDN6MVKnhcNybHiJQrbxGMB9VpRfgHHo1S9QW1W2",
  "key27": "3D3QC3H3kKBKLYXgcTvB2VF68W3UxFSRQ2WV61Pn9qKRJsQCdbf2jMoh1ehSNdUp2JTWQyj9rgfRVct4bgozE9or",
  "key28": "2RHRpK668uUsTa9jCwWhtHzN8HmNJyJVJKY8wPr7i4Nu2CwrkYD4E4Pwn3ctqs5xRHSdJaXUNU7wWiGVxTdR1kt5",
  "key29": "27QMhaTyhhxLyzUYWDhj8RMvJDVtpMqT9UitckCVo9Dv6NW6r5EmE4iMYqWLX7xqy9XYeKT8dibLrP274Syfru7Q",
  "key30": "5mCvQZtXAj4mbgSY6ysrcRRDEkC4o7tC7rVbFiA2QhTgaSbahzXRvfF5MmJfrsSA6jveMzD4gRSa9Y6BpHEz8wH9",
  "key31": "4idSqz8nPt3Mz1NAxVqLTrBwCLgcxQJ3nEZp9DWmyz9fGKVtgxSj8AmxFWmyKFUc6DL6xw3jRUgqGgmUQuUenyhh",
  "key32": "1hPxfKZ8SU3YCxvWdxrTxQoNztYBeqAc3FAMU4MVJDHFbJrk4d3PNegJN3wKVXfapQMMKPasuTPDMadiJacqB3P",
  "key33": "3U1eNBqFQYw7Pw6n8kPeauV7B9sLJEiAGntb8oDDN7QRFxL7C2Qg4ezC6evvMT3EdaXujaziyKiewqQiJD8uhqUU",
  "key34": "3paqXFU4toKevBX9o3Av6JqP8yd1RadKrCDjktxgunCqxmRzjxAWmAbkqd1Dz3fxau5pusuncnmD9bKEChyWdY7L",
  "key35": "24ZfR4oXtkQQhiiBvPaGezmxZv4noHBXMpg16tRgFnrkpkLfsrPUGxcPZByTAdC1k4vv33DANdpmcFJ3198N4TQH",
  "key36": "26ig2D1ERaJ3W9U3Wdknwh36fpE13tPGWvwNFrfWsx3UL9yUw5yaW7gZs1ffuUy9zfH1SGKTkQT5znC32hY8zRo6",
  "key37": "41QvQWU5Jg8PTjNH14VgydHcrToDB714aLR7dxq1M4znMasddZh7dUQMen4jnE9RftxZZpArTe5Qd7z3Ur4iC87C",
  "key38": "2i63qDxT33vg4oT7rWyZYa6VVZDV7t6fWauh9JU6eYgGLL6Fn2yr7TkmT3ARJmutzwNL1QLg4HPXGTdG6S2ymKCU",
  "key39": "3CEs68xPofK3RJmiRyuPmZPy9pfeFEkJ6FrL6EicDoAdCahVF1GFfEfsmpoeeCRnpqqF3kGfissgeFNRR7erL2Bo",
  "key40": "5jRCu5ti3qoSoVXgyZaJhBXNPrxQCX8txQqjeZVuNqXYU2EYoMisDTUhY8q5MKbHeBe8AtnEN6qMaSaKdGfm6ZUC",
  "key41": "4dD6BhkqBaLFK422tsGgVxnAYPoNnUwo7ySPyi6Vhc1WZbXLZBYrBmzDccQ4PmbakL4VdusDG6DSM5fDj5crx8Sm",
  "key42": "4XLf9okcum5SM1amgsPyKyhaV9s2P4DD5AsQWkS9aKmBqCiwoeSkdEhYsG7BvoaaEtbPBp4fyvHPHTEBuhvcksHv",
  "key43": "23z4gvUYiS5xKHqLu9YcY7c5SMfJwYpKhV7q63xqG9QCvXoR6o2jSRbjARvaxXUxiDsMiBFKPtF1zcPFoWB4RbjG",
  "key44": "5o19UVG1qotnk6zzk31CQkGyYF28BjC1GmLyqN8iF3jpCkFRfm77mwenQbXaWAHCMszvasSHQ9pfDhhMKD9m4xRV"
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
