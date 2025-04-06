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
    "5rkBYkLAqFrNV87S1RD6VXZsTKdadWb6XutWQp4TtQpRHq9VrJ5gtYYG1BtusNBNeHnY58CKzs5bR9AUm4CzpNG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZEGNKPVoZQvdPUyXc67DosGbJ1pfYpEkc2qMfgKuBz4267DYjnca2BdiJw4qo8E3dJAYJWyEsoVopXe685ASpZ",
  "key1": "4e7ucwscBXPeKzF8TcaB7TGUMx75Hx9GbpXtNDbucZbRuStpopB3SmYukTDHKWEjJHtHYYVSe7eXzxZVsoZiEv84",
  "key2": "WyLSSobGimWthPpJ4ddyEzAUD8WwqYoLm3c1rrVLo2pV26EbSApd1qAtokPc665GGY6VAuS4C4UyJzg8Nb1FGaW",
  "key3": "FRsfvpYEfeQnPSBWrHJ67FT7ZMqm2K4WRw1TPbRM7FHQ8EWRqcmJeMUn7YMyqbiXsS1bfTJqUKc4r6ScJZ4CApq",
  "key4": "62YaFmz1PxR1raua4rhYmrLeEJixvnC91SowRP3ekq5oCg3ad88QVt6cbE839xwADMJcH9kZ34VEBiz4spoC8UZa",
  "key5": "2aN7RXbHKDp9jbvUP4vi9igCUMBeajEtM5ohoxDKMyRF3z2sp7BLe6MBc61PFSh5i6S57VCWATTJSP3tWfyjr6n1",
  "key6": "42ErctbTPcheNZyxpFrt32S37CvNBbvZ2B1LXerWXW6yEUKf9ZXXxfYmYc46h155JMhmnnYs1LgnYn5TSzsAKz8s",
  "key7": "4JDzZCR1xXgkYLHyy256D8PcAETkuV88DPQyUjoKfQT3YFk2taQdugQJ5mEpVuL78RvtbDXE5bzWk2PtyUp3kKSp",
  "key8": "5n9TZpKTUBYXgLnwH43Wy5a64xADwYhbkpb6Bx9zKk2zivqGXyZrnnb9MMqqKSrEUFREMFCesd4T2hEBQo5UaWv4",
  "key9": "2qsyp6CWFkGqKkM1drXmcTwPqd5ECeU5PVkiNmNoTX7vuKVHR88tVcxnWHdkzcAeJbzwiA33xtssJsjfbpoKU96m",
  "key10": "5HtfPVAwhYxEy3hKmULHnBcPeVJUPCdBnCvHswJhiYoePqkHPgTNd9MMRX8LLb1EwSZhvz2PAK9TTQ2Ly1EiNiQB",
  "key11": "G1DrDKYARL4kSKKUj7U5iYKRniyZhqNfA5XYbfchwmh6ku2jsdgQp9nw6MUauAgDifQHgxpfkUfuz2sTfXCLva7",
  "key12": "4xXAXpK2oZ6BLnVimtbew2jZ6m3NaKNmM4XLgyoqZzamMknd1ZL3F3mfk7cH2RFYn2PPBrrsVhMpxTfG2w3JxvTq",
  "key13": "ekg6ZCX7ZCZKgdvqgbNEoTz3r6nKSXKTX2zLGxnQ1WerK9JdspcvMWB95UFQrc8KnwuaGaYqoaJk1f145ifE82m",
  "key14": "3DWQXzrTXZHhfKEbaCEzUGpnfNueNaHX7Z9Za1XJpzUAF1gHCUrGb4zKphGk79KnxiiuJs2s3puw2q1PG1jx4VX",
  "key15": "5vDZiaBZN6ADBmFxxSWf9nAh2ehu2Ku6BFEr9B7BPTgEkhEQaMuNGvzxyB35bppDZPobQTAVGHadYY1bod3HysNR",
  "key16": "2hhtUGE8bTEdGbwch1kduce5SHet71TRuWEVH6cqmVHrQcQ458tPCKxsfNPwa6cssxvNLMzayiTjfPQRfdr6uhH9",
  "key17": "5pVnNdvwWn2Jt7CrXu2kTkw1fZoqjUiriAGLCC9GCWPNQKhLPnvCGsFpbk2SgVtUiWC3wsa6M8AD9CTcYBySbmds",
  "key18": "57uyMcDdM81mkUowknb3K5BhmrXrRetyaPR32xriDEx312KL8r74aXEwsrqRxs98w2RSXfhW3Bo4EGc3eXFbNz8f",
  "key19": "2z2BDz6V3NeBknv7C4738V4Kz3PLW4AtAprDgNKXDp8eBdhKBNDRi4FXHNKPUHagEkLSCeXtKYeAMNHe35KzD9HF",
  "key20": "2jNE2F8Je66uq2x1sVvGoc11UWEBALTDKToUvqBXKG35Pz76VWC3R2ZbBmqqwNTjkS1jz2cgyw5ojiHp5nUhmDYz",
  "key21": "2K1mA2ircGWTBAKo1Qm5PnS5jggw26Cj1FhpC33NHPtKA7NsNg6oR7XiWX1KmGk9N7hAhGKpYyyg5vrKWWt6uqJ9",
  "key22": "3wXuzGpZgNeaQRvDXpsKgcZNzrXuPBMafYrZr5oi6SBNToem6xUGxfE7yfRuK367USR8KNvNveDC61R1QzGuqrCb",
  "key23": "2axpEpekuBLT1f2DRgAzZdUVxTsMWQrUwS6UzPkieNcCNKHAwCmvdJGxSDEtChj2VixJcgHgJ5uVcjJWXCq6jcwu",
  "key24": "dBoDVF3bB1LKocs4NWiEKZFQySMZLsrsFerFfQK9A3inccZnXZHqQs2TPeescpeqsScXFHKtijtUdQWhe8ifHoo",
  "key25": "fmyNWzi5h6QVH1cdpZgHshQyb5Ka5AorsjQtipakxtzHeDL2LNxffK7ERjXKMMCVYdnQXe8fmi2F5mJ9kVxBeA6",
  "key26": "5BbZJw1yF2fduDtpsnTV7T8yWU9gS6eTG3CVqLGjUt59PToxY55bZTvH6JwBMgFnSobZj13LGCroE2fX1S6SCLRq",
  "key27": "4avaCZLPHZiwFfBcdiPSDzEYWbDHAgzvTXD44hT3hRWccM9Dnm3Ts5MHqCtu7eKzGZFdw91UHyxZCTv3RYjzQcrV",
  "key28": "3YJ6bPPLjmPH7XzqrExGpDi66fN4w4eGjhJoYmk73oyipC3GuSvPMN8sw9fmDvTdJDZv7o9rp7XVEfHLWpbewi3m",
  "key29": "2PAb81nm7uKTC3n9GKyQMxovZXjEfFcxZgNp3GgMK98owY2srax2UA1FTh9LZpAoLTTBSkiJiPSfcS5pKTwSJdUp",
  "key30": "2TeShYbNhcxuhWCvS5xforJz8pZjvVCqSCRLUkimXms2m4BeH613bQmMBwAEP1QWhBQAUnRK7WEyfGQevgh28rcB",
  "key31": "2Vo1DbPt4eNih8v1NF9yxnPLachGjPAieabs6jd4JK1ZqBk2c4nSmUwUWw3pcoxME5svxEjeXf8tF1VtbodG2t5t",
  "key32": "4pjfR1QDXQMv7zEqoz6MZfJGqH9rxwTZnmo42i8DuzYKEi1oQKc1RC6ZZupxfTWQZdnVNr7hZBBN3voL76mHJbCN",
  "key33": "2udcx49Qc3q1X8nejiUV2t5exJ2hWRStAufA7N1KJ6SMrJ7hZGgvfX1eRtgvuD96CNyv3gVaDApPpYfmEzquFjMi",
  "key34": "2beMPKjmVFFiT6g3wxPZXkY3K78uvXSpkYodz6kYATw1bqZ52BpmWUHga6x3cxZjamzdRQErm4PWNV5waWkCoqLH",
  "key35": "35FX2CWYb6tETZDnGkQsCafjmCCBx8Jdhzp37PP3be7cBV4V7uFyRabe4LuQeCd9S5BaV2cMa6aWy4WLUYX5T3SF",
  "key36": "2LHzQfXSW4WLSGSBTa3wsTYbJF1n4mSXiVh4HESSS84UTD6vrrmtHp3qRzVPZyWzZMccrSX2FB5smGpQpQWBFeMK",
  "key37": "2mxxRu7PDn5BFVxfBykhnpjwe8eaR9SZMMfiLoQZ7Q4rPJnmGYF5KDpmKvooTfhXXZgo8Ybox6VxjNC32sBm34mE",
  "key38": "m7HRTWwn5ikPiXyyrgYeU3RN17HCV5Y431nt75R7jTiuRjDiqByTdeCkqAsyww4gJuR5yD5MaiaPKjrZM68f9yR",
  "key39": "39RvMMeyEhiL54WYKbgphSN4JFnDhhUVjQeY3kdUTJESYRXJb43SkEZYR74CuVJt43r6BwHxoFB5jhAPeRy4zR1o",
  "key40": "4GNH5abAhy8A8VTF6iarivzbWpcZPXXQxoQXJt5W6pv7qCGYdWVhApnpXu3hv8mweavJyp1vSeWfPD9kb4AQ6a3e",
  "key41": "BP8pETnT5QD7HbodPszgLyni3TkN9qHNy2DuBZ2VLh2KGYb6UMjaGnAgF41JtvbVFRMphooAcaaPqLqSxCWVHPA",
  "key42": "4zti3QeEKmY8dvz7B65z5tsVL2ABuohghq3Kbu8U7nv8Cs8EDUkvJCERU9w7TifS5fr3gU25bhUCWV47CNo1qcbQ",
  "key43": "di1mpzawFrc1K9UjUZDtRZTwEeXxiXoRcqnqpMeTXSNyAYVdgAkfxnAms7dxEzbCPNBQGrdEUqGex22m7DQNS37",
  "key44": "4yLkSzhVFJrM7ry3ngc3EVKwzsTmoUQgiH3BwQ2VsL3PJxxDZBX1aGp1tN2EXAS7RSM4mwn2Mc7Ye5n3sE7iMbGB",
  "key45": "5vx1bbkGi1FfMZLue7dULEW6uWHyGEkqrsnJn6Jg95HuPQZ3XwgMMtk5uLgBaZmHoE3WuDd6zFMae5N7kAMDHdkb",
  "key46": "5B5AFaG6MtUmnGoFbA3hvwPUKGgLbkhkfRz7NVyDxeuhzrXRrWscW66o22CGyw75huki8By4wYuHVnFDhBXcbjqH",
  "key47": "3Twqo9cZpsde7Z5WPUZHvhpcB89LV6caerNthpzCNeJEzwtwygaVGJrEejZk1W6EbdJnBCKMBfZagShZ8sYwWUGC",
  "key48": "3y9ypRgqaS7z8yEyXctkoEZQ9WeB5fyBxVv27JwYsZ3LLq2r46EoeremdX6m3sjE8Z9jSHQ34yqQ9sKH99Tj9xZw",
  "key49": "55npidezENY7ihSvuBcdV5d8TeUm8RHEF84du9Goy8ADqshnEjhyJesVE2bcAT4X2zUmNcFdCA9q3PEanzpVmhRB"
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
