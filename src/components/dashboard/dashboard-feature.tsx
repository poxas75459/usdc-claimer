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
    "9H7teUiifAJBnAdcSM3HAKMPzNSv7J4d4Mewt5yETxBav5p6EE5Re35cENZCAbaR2NLJk7GVgbWJWTAnAbrTG8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7vC6P4FZxDETEEJ3VJWVzNqr4F9iDNsKSxhKieCzZuJ431R2T94oTPv4FQgYRWgnyeF6jgm7VqLmzMACkpviq2",
  "key1": "3zW2ZoAwDVqeGAysfowU4thpyD8Cn9KCRESsPBLCMkCvY6Nu4CRBqobHShV23c2dwNu6T7xWNTnEyBPWUX5G5VdE",
  "key2": "335t8inwWF9iXPDqg6HCxPCBjc7ThuqXHEy2Xq4L4NMpx3YvRpC9Fsd7ymESGZ7644YPNaiQSvJvTVi8q2yk5jKr",
  "key3": "3635fdU6TaYGTRP4Vr3Ke2YNdVquNb7jyRek9tyy4smpQByz1j6R11o9Dw8vpjTTyAvvFAFjchAfjXQ98J3G3DNw",
  "key4": "9VDST6cwFRBCAvvPuBFPKvdzSt9e2vg9pj3GQqKVXUQBFFVbmAhjpNGLrtr5BgD5Jnnvb7vRVrEi3o6v244hrFF",
  "key5": "5JkgNDqZbWTHDKYNYqsmtk1rHDMDhroyzFGWYYk8dUvG3t1KjB44W6FUNyFsFRiWxVEi7rKyHs1z3RAHG8kJhGnn",
  "key6": "3jvQTwTDx4sUyMR6sngF1ngtWzNRzBhqRKp4aTP3DkfzpChLYWnQBeXUfH8CHcj3fZvHjEAkAgnpxmtQq1L1zPzU",
  "key7": "5KPS9cGBdZEkffFU58xUjxqyMuzc6J4vKAKAq59yo7Z4URqHa6ZzU6n3NozKusEThKyAMWKWR8R147Bw9kok3Xw9",
  "key8": "5qCBV8cpdZnGSVqJy5X2KkqanGvbTUUfRWpvcKLqT4GqLwDaYQprCrRia8B8tXv4yi9fjXT51bW7j9hwkxueupAM",
  "key9": "3rPuBKWbSZSt3EEmfGbczVSTUQa5rRPDzRjXYuHJRJrZukqETEoMw48F3CqwxotWHBWhChy28k9FYLG6wxZChbG",
  "key10": "5ca4UhyEfBCeyeQpkRjR85XYwiv3RZDSZiHSFyXiNCXEv3Pvzm5qrNkEFXE7BFP41nVxYZCy67x36srMKcGeWKEx",
  "key11": "3Mmy5oQS6fctdnr251yqPpPNaSnufKRdHwuE4k2kPy2vXDgv1WEACnuwT5SLPkTrAenE6vxV1xFV7HcKfKtSBjPo",
  "key12": "2yi9KuEzdohod2RrhapaWWPqeLY3XoSyunhqs7vaZrkFvyvDKStNvcgp6KhxP1Urth9T6mM2bfcFPu1bcipqzPai",
  "key13": "48eiG9T4sc1h5WHjufY8uuHpzSufQ4ZaJt4zu1iDGfs3vQzBHtmdYfaFhdcqV7NYchH2zmrcmrcYvSV12oHBUvGB",
  "key14": "5nEW8Qzt8C7kefL3T5StKY1iBSdpcyYVeRQp4JLYGFqBmaH2HDWx2T6r9VxnTBAKc9YZTdZ3KRD2NYHUtXYTQyQG",
  "key15": "4fnZYKgZuUUUGmDoukfxJHJUPDaoHqJ4XWeEKfvEf11NzdM9sKFEwFv78GqYPfhWMnZJ4wPz8N4sBMhjd8hqFrji",
  "key16": "4jr1bdxHSknXpfrmrMMqbz1kvN1j5186whRAXJBE2Et6HD34aJ9KRTcszSu4KkDq1cn5scNkVqpLXtz3S93PpVVR",
  "key17": "4LeKvyiaZWFLCCZ6dMK6SaMVFtsV6ndgYHBvz6N1twabbTYYAZzH4TfCYDjM5HHReWER8v3FVusqte2cehJbQXMv",
  "key18": "zGUaRoetvy1jWJPphhes498D45Vn4gzhTxtNFiiASDnZGBYX68AFzAT3CBiLM7eaPsdY8QGtr9F6gvstFKSapd3",
  "key19": "YxtPhxc5cwhbVPTtGWr7Ts6aLo9Aq9ci16vtnjkhMex1hbS9xSzPkk7ak1ZPtmsEiMbfUjRqRFKvqGpreb1Ycai",
  "key20": "4dTo8iJWUJHkgrvjWWDTTqyRUFfLhJPsstHrTrS5Uzpn4cbg9kigwcsUkhJs4UF9vEVZVXLuFT4djrFNRD1Jf7i1",
  "key21": "4MMpQXFyAuD8kHHaqbbH7e8QdHxdKbVDo5vc9Vfc5b7jk5gBThrYxBdrtbKgVDoHG5orUt322V7LeAbmP5rFL9tR",
  "key22": "3f8w6BND3YUZmircxmgHJC3dqwogGRqG62Y1NJjV2Rr23veZiQ2naAcpveEY1M8AFA5qM5QjhZpvURwhxGqbstEi",
  "key23": "4iChL6fwWGAuFAmCv14Stmp7ACXbsmtrfsNeNW5pGbjVwsXwXo8yYttEqwwCaA6bcJbCdXTi7UvLFtW1iuRFK3jm",
  "key24": "4sGJ1tJB3PtiGGwkwWFQzEm3bqq2rj5D89Kx59gg43TADFZzs5fuq8WhdvSyUbp751ytdG5gqnYnkY47NkmramGS",
  "key25": "5w2SBQggLymsEauYsHo7NNUMdYxGMwJLjesdFjHvwoDHdN5sKPg5QY8cHEqSK5CS2AvVKGS655aTUnfpBuAsADsi",
  "key26": "3bnuu4az3UsNTZrkgAHz8Gu4ekULyLgNwMatw4N2DdWynSzWj4TVeib4CTd7vyoxgjPCEvDiyS2W7TYqcccX2HMv",
  "key27": "udBReJpbnZT5iKT85RhiKk5RGKnWok2RGnn218oPR29GPLBhWiTYFEyZXfmxd3ubkik7AEjgypA5hZedwKxNvCp",
  "key28": "31UWfb7tGo3K9ABz1bsrErS5HLETDcGNhT2SKYqSbnETGefrv5QZLpuLqycCYkkoAnSyd52QacF3byJWVUMbPBLo",
  "key29": "3Nh4nAKk1bGiZsue83cWbagfWozRfyzLkm8tbnRg1Wq5c9gWtPGCxBy6L1q4fDX1TmaZVSb9FZjDbJrJ5eCWxjw6",
  "key30": "52r4tUpv74z6M4TAxin3iyC1biTb4w2SXxx4Te7aqRRpgafcgnXastNoHmEMHihRCxjJ4MimoZpgNx62ndV62PAZ",
  "key31": "5d7WpjTfdvFMxdVrk1ThingM1Tmwu5MaesLJo2YRWQqaMuVsKzyDwHmM1WQwirJ7LHGniEaAkSa2GT7hsGDtguyz",
  "key32": "ZeJbWHCctBuUsMjrPM7E6iKbGqCwKTNmQsja1R2QhhcQt2beEQXDoAs75byiq2uLHA5urxwNt7eh6cYxUys9zWP",
  "key33": "4rkGXxU2X5ejPFtYRKMgwwzbWf1gyG3qGpSWxupBFe7c7MYvDzNUG7TcqeD4n7xkKcBXhNDj1EmRFNS5LceLQJcT",
  "key34": "5GBnScC8DkZP8qesqrRDB2dMzUnw8xRfCDi3nfDMNS4BJmxYkGUfgpZkij5JZVuGMMJ84rb4Tz4phahCzdhWa8hR",
  "key35": "4ddoaPGqXU2gN8A4G5xpg76Lo2nmQHCubPnPkXsJVM3HsNZ2ZZNsUyUJey42z3mzXA11LbX4tYBu6f3KZmDhQsSp",
  "key36": "4vbogPQDgHMPipXRYuHtHJoSxVjJeeCAexFjQXP6LaQVHBseeyESpUbG8Lv8S6P9LyD9bE1Ktsk1au2JhUDZ2FSb",
  "key37": "2Tz34kToAwpnTwM2wfzuQRd5cRfPEpR9f2fby7is8pX8xnjrnKt4DujLowWMpY525hmyXn25J8GEDxZ7kZBjBtQd",
  "key38": "kAjsxTKEFKaxea4Uhws9diEa2UUvs7s7nWB5dG98YdcCJhcPKpfYmnm6o4uAEMRq3ewLAPgvMFW8UejvGNYCAZD",
  "key39": "4r5LfKz6edjhoSyHmN1MMFaBGG8is57TGnpzhc6N8Bs3mywnXYiqpKzCUatxtp9H51MQem8W6xrcNRH9gwfVHkqX",
  "key40": "aLH615svCyPxtRTJ2GSbFA2qJZS8fYWC26FCrcCbSDGubzM6RDkfZarEoaxESfo3SLJUWMMfABA1Ejaw4qetQKP",
  "key41": "4kHvQErNrujn7UWcDUFCAF26iJiRV3XRhoNQjTpBFBoHC28ya8eGFWDXVkHnCE4yLtPAottQ23KU1Bz6ERoC8maq",
  "key42": "3vdbuMFin86tT59XAQs2oNNQgX75Edmh6iFsC4875x7CTdE9NhperSaAAhyUEzLb6BaZceW6VRNbvPAAKbt9bWuj",
  "key43": "3ku2Q4GwE1EY2xH55GcHqy6rScnRoHThx6Kh5Pp6uThM2RqLyDaMRAvVK8kokqbsiDtupUoNgPN7y67nLNY8oFkz",
  "key44": "5XyBB1fGLzNcsdRMZc4H1jouRvGfjFudhWTimod1hTv6Xqb2rpu11SXC6FPBwJQzzb7xp784xrsSF7NzsyuSCKzW",
  "key45": "bgSStJcRvRcbLn32LWc1xUTgpZcrNBvuxjj7DNaR8P56pzJDNB1ohyYeEsoFgU75G5mrNFw3ATrR9sNqZqb6ope",
  "key46": "39mNyzJmtU5UXJiSsr4dP9jbtHAjzTSS7seW8atJsMuob4uF5ekE2Ehc1Y1eoYL8AngBkeh2QZRzsRmAEsJdQzXQ",
  "key47": "4jPSRtmo7oAgKbbHervUMiXS332cBT5ZZ24JXWqfdZ6RHcdJ8NohzoKW1czUDh8d6AzkZeRziGfitZiQrsXtGdPU"
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
