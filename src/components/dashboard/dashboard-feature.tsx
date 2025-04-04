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
    "4a8CLoA2tJV7mw7cCgX7E4RqmPQ3jWAhEM9gQAR57xDdfd7VgrNjXCXYgEAW7PrwEsE4b4wticVS8MCc7G2KG5tV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ryEENXN8mzQVa64XsatzHRib3rBR8biTC42CrRvPuPkGoitfHZ1GcEDoQpwpiXjhuGcMakdKGJyHgyv7PPEn3Mu",
  "key1": "3YnRQspgfXZN1wRYDajbEwgkSJVdEuJS2r82mviZL6oqyVdBsW93U89oUraegLh732jerYZWePuTaj5HkqAmHkQm",
  "key2": "4mNUMmnM9z1AV48zmCCL2h21hJ4B9tzCPNfuZPRpgweUmmMC2joQJ9FTLCEPYhJ1uK4toKwJUnSBJCUtuAZNoqPm",
  "key3": "UCBGDNJSyw5p67rBdFrukbkxynsUL1kTzmnmkwNB4JUvibsYYApBTmo39BgEid95SByqAVT8HAcZVRaa2PNX5Hw",
  "key4": "FwSjZhbSp2LpQFSpADMsg5Qc3U6AyvBe1MF3Wj18DqXa2Hfc8WKz5DBRFhhnX73u7WarbmLUZsVNjb8YtoCoNjx",
  "key5": "5RyY8VqPZrqo8YPrXXSbeMjrCGkDb41x7FCjq97aF6Zpf4QiKjZeB8fhSsAs6hMnxVuvmFCRQpCqcK23mMMb3HMU",
  "key6": "2MRCKPf1Nr5EymmDGVGT1yBJrwveyvMPvtwicbCevgjxhefHhugZGNBzYpsyv9UT3GscdwYdFG5BTWfibZjbd5Vk",
  "key7": "3kFRqc3c6L5qxGAmFsgwf5zgiypkPt6goMwqgf6dSMUAAwhQgfEhFAGNmw1UAgJaDCpuqecUri6WRD1mWir2Wm8C",
  "key8": "5Npp1HpDmusYjLatBVtnVowdigLANnJYJRCj3cm1oJzz9v9PvHLaTQEM9beGDGw3D8RtWL6Sy3443sSbNDWkcQR8",
  "key9": "4ahhzTvtPXAKiKUm5omA31Dumbchpzv46cYBMHb4qQ19Ws1PwuUNcSg55svvgLmx6WPSsRoyzxcqSzcFM4MTEJiT",
  "key10": "2zehz9PsCrYnzc75PmZEBAT59XvHsn9B9eqentKy3XcRhdk7SLrHvdmiBnXzfebgG99TzjqMPGy6NFsqCdRvHphD",
  "key11": "5sxaGyhYcg8mW6u5M4gk1zFmKfdGdt7XZposUbHReXK6TK7zpxCYvAxmW5cQtpsMkv3ULSkGMCNfz8B4Sx335js2",
  "key12": "4Daovez88EdchFu3HAXBCX5vt3G9VduMKysv7rRzHU7S4uqv35mNe5n97ReswLfdtzoiwUBrnjcedZ4QNTiugvCG",
  "key13": "2cXzp3qpnH72tf8mEYmH7rtjPbE9pxaRcAjEvo8qafNeaNkEt7sY6Eg5rP2b1LEXzv1mfsEg9nyce799s1eGpWKF",
  "key14": "5RyyUkiuea9JAE3fjByonDTcTJsoWVzzX3GQgWwxAaJ9sjvsCBniUtP3ap3cUQGGwP9FuQgL8mMBrYMkLufupvbG",
  "key15": "3muMVfy1E2CzkfD94VJP6nje97PsSuP1oQ2w2RAcLNPEvitRyb1qzcCZQWfJX6YtyRVmaocKgVRU4SDYmJVHwzTz",
  "key16": "2o5MLxQdGFVbiS3UUA8U69rUX6KCghGSMSHGTwNwxoJGPsKWwQGMthE69RK4A1h7XFfvGC89Ahyg9gxKYrrivPX7",
  "key17": "2LjjH9vpJPr1WdvkEBQ24As6DN7cP5d7Y7eUYzkBWjCjEThG4xgyDRTyCFPdbgrVuTG4yyqjqQoRTwrbwAPdACr1",
  "key18": "2aa9cxDjk9e4T4m6zB7X9Ga4f2Jn8pwCtNf4wBdHprv1GGBvN6XEAG4w41gDqaF6naMYNzmjrfQj38zhngD7LigG",
  "key19": "3bXY4dWpjCoxgQvQ9j74pvuRGnmTPs2paAMtiuN3KgMUb3QBSTLHh19R8EzG6zmDZfuRQf2q2umfKvtjrj4VfEKZ",
  "key20": "2xdoydcxPUw2HomqY1twibKeAPM6JDWMJtgb85JuLFNL1hPqX2mUVJATANcU3NBvuWjAND33Pfuz529FgaS97zoM",
  "key21": "2QZgt3zXPXwJN4n15F7KktuHXfGW4fxdnYHgzBThYHmwtBgeoF3JPpEHmfEPUNj779gRVmfo5TqzTAiJG8bmd1hq",
  "key22": "4N2jGpir39HiwdJkG3NGHCBvbD3Tgf8JB1jnmX33obxcb4HntSCMec56wJKQeZ9LDKB39svD5x2qdKEfhoSX92Tk",
  "key23": "48SF2armVcgL1kPGdzqYk8GZ4fhcg4RPqNx5QN2puThLGdtTHUHrrejGNrFwbNZN1dAiqJe6XiStiVZQkUBNtesh",
  "key24": "5RfHM26oGcEYYZycm3fyPRZ9ESMXHmHGgryp7AzwQBNAvD1mFxHe1n87ao3vXiBME5bvuHTjahGNPamKQ3PB7L43",
  "key25": "42JHauEVnuPXSrSPwjbtueNZjkFbytshj8mAMEY5arkw9oi7zCdPp61QPSc7m7rzSxNxH7R3NvXA9UsZA3btz5P4",
  "key26": "2zthUNNPekt5efdr8gmvAPUY4niiyjqohihqMBFpcASMTdPZoNcbT4cfRaPAuZkCiscBp8pcCrnqXv3aMD4r6b79",
  "key27": "3W4CKEo71frUd55tBEoXuB3Z5HTqA998f9L9e9NwxkfH3cAPpbHcEuDnc87Yq1K8cTQ1T6MTo5pGFNj3dyuH2txh",
  "key28": "jXBmq2HMhqhJyy1ggY1r13NwaedcaAhUHsUwdNWxvgmNpJ4RHUcSMAd6vA6U5PKCqekNCBXSp8VQBsPqsTW2AaE",
  "key29": "2AdLf1PnNxcEcd7RCKJ99Xm1hT73QaqwLp9ULBmYMK3Z3Rcu5LnPJfo1x9z94gdRSkg8LmZffqXt129oYttXYriq",
  "key30": "5mZshUsHuy9MfgXTSJNqUNgConmBM2Eci1Sm3VKmMtWCHCDofiYJS6JSo5j1a7rDXDP512dqCb7BtsKGmbJtBZFY",
  "key31": "5S2XT421Hzrjqt6Jpydb7A14bxMReVp42ULqEC8PZfKGiuZD6Up2Nc3yVVxmhcGnBruspk22TEpEL3cCUGW5ZMm2",
  "key32": "6zxciCLqNMNurQfVazKeHhsfWeofPhbJUPcyHuwoM41o13RWhreM649sM5kmMqYipALWQQvXNRnDn7xLNRntes2"
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
