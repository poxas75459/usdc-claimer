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
    "2Cvq3DAz63PCsnHd424cfFNaZtgVpN2pR8LNtKyWKVrDFHwPHM7beYt8bDRiTWSx664pxRZteyy1udxGJkMmRxn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cp3vX2RQtspSvWcjsFP9PkcuUryLW1myCMY7XQ4mfbWQQg2MxdW6fLReFCeR5QtbL7sgJXERAcbbk47LQqZ9d6a",
  "key1": "3tD9sdqN8ZGmf5MVHx1AZms2wUbDZ8MrMqXQqYY7PsAY5pYpUNH6UwLjHbtdNH9Nhmpa5yg2DsxSZnaGywwmB1gm",
  "key2": "2Q3LLbEV5W8Cv8Qcycy6HfVVzJK3dXRGXxQgA5xGBgxtUZuGzBf7iYSH4S1iavJLZ68w5duEFXKjqHxg2iZkZHay",
  "key3": "2EDmwnHBokMM3Ub1jaT111c3CSBiSeHuehtCkAU7REPukBU54Gquqw3QyeK7DZ5DuNtZYEywonyjhj5funuSM3oZ",
  "key4": "4kt3GpLYz7pGEHoFoRJBaFzyaN2kqbMJrjdXpTuY6NV18n8rGfLtQogP1x3KbUJHrWqXN6AjNEKM6yzotH4p9A2H",
  "key5": "2PgeAu4ybbpQd58kSKeR4XSWweh1twNfbXqJRoHnPEiUau1yGmt2qtqJQ2f8EoZq464CfYese58A45XuQJn8hoNT",
  "key6": "yqW17QYwTpHBm9QBAu1wESLspvLZnwJuBwHMDExZeMyirt9pDqJuTiMY4yM1tAPuaP6eA8bRJ9gHXkPfeuzPkRs",
  "key7": "5bXAnWFfW5XL45nDiFrwhsSWaAGf4rmjKd3V8cVScGX7ZwsVmeBVXqHwsb8Jhr1pbpXoYzcL5NGRkwGjXWGgwFna",
  "key8": "KRFgKHQt4G42BBWCyja42aU29GEsswWPSwiNuUrDGc5wkF4retmj1CypmnvXwefnKFBTBvDDi46oNBVPT32oEW8",
  "key9": "67KqGXmBt9nAFvNHK9Su77zR1u5FotauaPrVHypzjDwHB1mSKLsVNTR6P3s5ZXsDhCRxrMhAYbSqjLGuTJbjpP1o",
  "key10": "2vTfoN6oHo5dtg8xg1AQBDW6YET7Xkn8mUskKdWCekBScJHU55NXLctxuNtmcfopWHgXqFgE3HxUhHWTvL6axLSR",
  "key11": "2vDHz8P58oaCnpqNMg8XPv9bvhgvm6dgYKa5jdwzK1DVcVS3miXey61jWmSGHwAUKk2bpxNfj1c67iwk92FBWBcG",
  "key12": "ambjV6QEffrAfTkoZdwhnhAiWoitBGQ6nh8BNifYRT5mA6B6jnDhigyo4Uy5QuiuJx6rbAEFeRqS7q4XYH95Mk5",
  "key13": "5f3c8GPsJjcb7SFuWkrj5tC2EMjcjg8FsfjPhCf4SfgKY6mTgmj2HwJgWnTNZevgTHFq9rGcbXW4fwb2bZMbUFMF",
  "key14": "3D7SkHyV7qdMXCRXvpSdZfgwKj3xkahJe1LWpwfPK6EYZrpembAKQLyAp2EGdpRqXqHQEtmUQhbBT5CePXQ2nGfP",
  "key15": "2ZpnKf8nNDxSEvKcu1dDqxooyHQDExaRGXhDssVNrAmiYQnxcdbbNL1bnvsbaGf3K5k54EStuhhAzU8aLbTF9kcW",
  "key16": "4GcsaPEzEMQ7YwaoDsGEEW79NgsedfAQP1GH3XEzczEfcG5h18yDrddBMstzxFGfRV8ETJGaqm2swXzjQ2ZdzfBd",
  "key17": "5W7zSBj5cFRe92UBhGVgbKzN8XsUqsLERskMSfDTLxi9dBeiUhkGFcaPymvJcHWtC61Z6FMerHU7E5kcfn5iosZy",
  "key18": "5Xbj5HJPU5J7yxnVh46J9Z2uhNwCADdhvxaaPwvLMmXkryzQtKp6V2iVFrAtvN9EYShjbPcmeS4bhc2TtjLsuU5n",
  "key19": "3dSzGpmNygPszrCG8fruTTdMKt7TCJBU9VspEsAvWnsJFzZvT3Gvj4RN5kmrNYB5QbEHDqiwRtVZfaxXRG5bHzea",
  "key20": "3opxUjvQynxYT3yeTQC7QRLpSKAbK4WFzgJ7scG4XpZcZEapUK7P8ScbWuPoaLyA3GJVfWLS5xhDTg7deH8ssdwu",
  "key21": "2Z1kN9jxUTvUgdmeDMPTGLNUkMeBzyzoWQ42AhhFJdSvm3oBXaa59NeFZittv6sjzL76Tr2QcRJVuZPwgEfBGGWA",
  "key22": "5V5KHpRbnykaTkGk4coHSwG2gTzW9fm7iJ1P1Ba85qDFZfV9fndCxYoUBqhiXCWQG6g1LXEqSMXZ8bfpbate4rvw",
  "key23": "2w139bUnRTUP7P9PdhXK4bY6LtrggXnzFN4Xw7B1J2AzK2Ma819gXKVsmdwKSABziLHJ5USsn1xA9675Zj8r5LR2",
  "key24": "5eu5kkzN6y5HEvWAwCXSxQiMPnVdGWyKCZJb1hb6UN7ErPWcaNFyM1wGZvJ6PJHyLLn6zRNq9fqcyaspDrUQS8nY",
  "key25": "3mn5kBfrfnWb4NVGGdheAK1KwAmdcvxJUBnW4BGx4nHZcSSi8GwrXY52ncBSzeEgxrxsNftrki7HJU2GTjii8VM8",
  "key26": "3ozZpSVTR47iK8Ext9eLkjgvKydJXCyAMhTkgC9ZH6HtXyzb8wQf2zPo41FUPWT8qZcDVtMD3gPMzRF71W6AjbZP",
  "key27": "3LgEJ3SeQ2j4ooUfZKJPVYYomVvANEwYwPnZVHd8PMSQQo5fNtzWv3j5nuKBEXHz5TMR3YuCnTQdDv1ERjZ97bwJ",
  "key28": "2FLdRRJWfNn1gV1NCx4vc2m57yVrmCmVuaiJr8oURLAL5yr98BuGYgKRNsp9BF4TuWiFyJz3G8jKY2XFKxAyYjDN",
  "key29": "32Hm5T2S5c7PESi2JbW2eSdGb713LArw12mckdEaVuxFweEfNKeN1n7n5wx8W9kK7NMZdrgD1SkPDRT8ftgbbN8j",
  "key30": "4K4fX8eoKiZxxN5hTZSoY4cJTLnNpurwsoP4VZVdGNpEvSgWpkqRgZnkZG5ytMgAAhzAG8nh5uyrJLxZWjKjHXgW",
  "key31": "3G29WGpKVtkx4V7D12ykjsh4bkJyFesshS3vzJbpz65aXjSgtqoVJTCm3zpPFDtPB4XdCrL2w4BbaYDRsRjBYBmx",
  "key32": "2rLub8RmN5mDeJ96Lc5yXdCKCNWFCDnL2DhoFD2bQoZRkzF1z1x9zR6JgD7upHhPjKvfMLqtRHwVYADtAy6YoE5c",
  "key33": "2As2Cb3Nq4VsHoKmUJ73PkPBGxSktVkj28zeRnfFa9MMY87S31L2KDQLsFEKVkrLFYnrqszeGuBncXgqPccsS9ek",
  "key34": "Gyosr9wNPB24EyKfXnL72Da7U2BP4VniHobB4yHhGavMpejRgJRhN1G7yX4G2quUXbudrThFwFgVB1hdzAf7AM5",
  "key35": "3QRpzvvRo8U5NhNawNMwjnAndvZBsQWKBX4dtPSi8bc5rWRE6P8j6b91nkCP2NvrZFb3oLwBjWExfAbCpbyxwzqx",
  "key36": "SbbxeENZ4SVv9WtHSm4XwcAGgjftxwVeE8Y63U2SHWE7yNc21Vt4W5EcsR1Hv3ajGGuSByA2NxK6hyUkzQhmTD6",
  "key37": "4Fd257DcuaWXRqHYwAZ7iSGCdEhTHpvLg1XGKTmBX9aYjFBzR45wevzeM3yyRCqhw1frLPfxzc4B7b1RVN6LLgJm",
  "key38": "5sWJ7LUUTmVFFA53o4sbVvvLxMBnkcV5TVPhftnd2kA1sxyNfgXbi6JijwcVZV77YmUMpHFpMJCnGFwopR5Vo6TJ",
  "key39": "2fbxxasC3t8jhyERwUy3iNcBpNtRZAd79sVu9HYFRGxN8wnysXq757Qsf3o5m37kojQqgHXgXMWwgeTVVTtveGvj",
  "key40": "y2xz2fGXTLqnh3FMJNyXHacqkbuBWN17cvFCdp3vZ4omiGzp3C9AsRtPC36x1odxnZwa1Rr36JBa6iKSf31kPkN",
  "key41": "N7YiWgSGZxBUBE5Kn7AfnA5t8fgsNvLryYE8CRuJ6faDX2SimVRAe64jb8xAbssz8F9pD9mZBjfZb4e7nG8Scnp",
  "key42": "3ZAL2NAZyRMwqrxD7QyRQYbbgDDsXxLuMWgDDhxw6Hg3pWBUBKJPPHEh4v5dE7eXh2XHBQZPB7o5YBjyN623c8ge",
  "key43": "2LBLFmtDHbqpkdzxghVTnG16jTr9CpBojR9pzKzTdafVyq1akiQ5CGmbSyavvt5xSn7MdWR6mBbYgpcbLKPEufo1",
  "key44": "2W9p58Sg2yzUD5GTebSkDnbDTWiB3TfijV1ZGVpcnFPdxYRgRHCtFv8bXm1QvBZVNCaFj6AhF7C148iZJ7dCU46u",
  "key45": "5uG3L1FU2n1sW61p6ZWGvXjHAvyDunwunzX3pf9oZkWD9oxc8QhDC1kCn5TdhDiVzqbjY64ZS3sTKL6vbNEdvzNS",
  "key46": "2EsMrsGBdfbQK8q1JoicUJpicxt8HBTtV6FZzhHpwAmouhcmaccmHqSxnhJxSBJupqQhjtYVVx18uc3NfxEC44Lz"
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
