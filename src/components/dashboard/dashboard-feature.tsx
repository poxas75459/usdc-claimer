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
    "4SBKiTJVUhvsXNxw2YhP5M6eL7CBi6VCVZYK33PrBPrf2U2jCjnakK7717cYiLzcHfZVUn5z9g6npAUEof46eQMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633XCnJ9VR3LbRdGmHXHfPYfCwByggerUqG73fpsiE1mY4x1rM57sqCAB6rmr9mf6pSGuqUW5JFuVrsXuWLimRoy",
  "key1": "2vVJdkc2ARXDS8neLvxNugdjbiuPKVQx47SeyWUM5uekntFFqLsiAboo8xu66HKTMPnPQBdyU1VZRxs5mmehqUd4",
  "key2": "4iLtBdoE4au1rEsS8D2DngWDCx4VawVWQEwkVyRtzN3ZxQr61cKJre5nPL1Gm365ShFYWKaUnhdUoB4BkYNiNwvg",
  "key3": "3v7QgZX9d2A6uVVWzfkbG517Zrxt25vgMCiVBAqjoUsaBpGnU1iFyQT4tAPywcNAAdkV7FcbUvRfgiE8ppZwakda",
  "key4": "5UvQsoRYWc2z1SL3bXBXmM7SyzkqChWPbQg6gWuRQPTCmpSf5md2R73SnSGUmpik7sHU5GbcH5Av7UfmFM5WSNCV",
  "key5": "2KecwwrYtSpFWQYME3x4TfqwSikNifzq3ozQeCxigQYF2bLM4hFUtZAhHeXRW1vkqxtZK3UHvWYU9Wyd3NCWNet8",
  "key6": "3kZKKwr3G1f3H9RV8J6WYN6gXaStfJH9eVxs6XyVe7cQrhKwUteWKBib62UPr4UV8raEDb5CnarzGbEyD2K3JbQH",
  "key7": "266dfKYSaTdKJJEB1fgofkhTVnMZEBP3kPaDKuWFTEf5G2avY7qXimEehiVJHERWaU4V5Vr6pk5URBtbmWHnWVTA",
  "key8": "gcLmcpRmg94GjfQG1ov9zNECW6Yovmyd8ywEbPnm6FpoLjJS2FA9MYY2Ld5j9H6NuPabiFqVZu4mxk5rADh1fdF",
  "key9": "3Nx6YrKWNucETEz1VynjS2wXsp6amESVanzLvPNKmxDQfmAK7icN8T6BK5Eu9HH4FfHrmGS5jGs7iKKCtaAA8L7n",
  "key10": "3RfWTwc2wMqVzYM818AF37rX5VEy9yV9QnjVpquU66gSyjytDZDVBiNRK8Jw2qVhkhgtLdJZjTBzBKy3aSgwKUey",
  "key11": "H5ETCNHfEb5iAELfbnA2EuTKUKLaXREoUaRNwmPt2deeu3HBu9VbsTeXGaAE5x6wiMV9fMuDAnXExCby3xh8hBz",
  "key12": "rNUx2SAqeMavzPvvYSzSX1tUhVaZyWNBf7pmhPkNpsPpMx3YeLA73dx77upogRJYRDPgtUedLXrWAtxc2gzUdg2",
  "key13": "2htJSDoBop9H4seGWxLvC2UjAPKQv281WqiR88gemfHnLg4M28VrSoXo5KWcVhJyPow3rFEkN8ao9XnirgV6ZDkm",
  "key14": "5DZSxPFLnAkD9T7cNW6uandF3Vkj36V53AWcrmjgaqMHDacPWQFSiuEGnA9UAyJet3bWcLi6obL6WQnhibokRed7",
  "key15": "2Xzq2Yt6ZE5QZJbffpXEz17MsyRbBKTDc1BhfvXEYorfzA9njW56mHLqsYyQD31nU3FXzgkobYF3QhaXAMTsFHtD",
  "key16": "4Mu7T4wp9L53NUgVF44ZvMP3JQQTSQfssAaLiGS2M8X8J2iDqVB4YSLfsgeXFaG2JaCpjwYXv6mT26gnn5FdpFVW",
  "key17": "22KPi1NfYnnU4y3J5F8sjA39FYxhq5AsBdRRRgMWifCNyWzDLTybopr3f5FiY7vx9nE5KKNE4UVfkoHgR5WVb6RX",
  "key18": "4JDdJQr1FFiGrsvfYiCSUMG14m3vxWsHkGqtoCMBwHFpjyr7zLxZdV316HUsoeoc12XgLkR9QcpsmrcnBkVseoMc",
  "key19": "3KrDfW9g9DHpoAA6uUMSRXfpCj5gs54545VLdqKGfKejCfwnfRG2UQoj8fYf9r34jMvaL2ZXeJAWPbmAtLMdQqfx",
  "key20": "5y4G2M1UN6oDvNaeBkmxbFMgB8S2jrU6jRxsXKyYjU8isVFEF9Dkqv7BUtZExhn45fjZrrnykS7Y55AqvyC1owgn",
  "key21": "tUrtfMCkkrjc5LGeQubGQFexsZeT6C7TEMS3DCnDinumzqAEHLRhwaiY8qUgkkog8FeeuB5GfNMBKTrN29c2UMN",
  "key22": "32fXsbWd5PJuAL6Y8QXw18WyViLcX5Hpjzf9Nu8wYfBWNAfAp9QFpGsnPm7wK1SvhAh7kR5KXScPz2txMSxb8jCC",
  "key23": "HG9RG9VCXrPNyUVmgJUXii9NiaLsPDRiN4xT5duwaPCDgZwJEofrZWbVcJNhEr7PfoZs9Z9Nj6AtD8gaYFW3Nun",
  "key24": "3rJqK5ZRxcxFUgAYpY8MpKU5if1mEWSNgP3msVP1v145fLPEutK9gyY3U7vS3wsWMexv67bpqdmSGMUz96tVFwLe",
  "key25": "3zjSsZXu2tHcX5rq56V1F4PUDNbwfym82NhajhAzJZaESKoigBqa6hg999thTdUVGENacbjGBkxZQQv1e9ywbASK",
  "key26": "3a9p53RSXM58Z2UHNJHHdjVF3Xz6ptCHtrbH5o9n8buyioU2Pc7MtoX78nqjF7v19fpXhM6AfxyZuRppGgrdRqwf",
  "key27": "4ZReUjdVf788tNKK2AePwUh5mgCnyBKmP2i1tJLEm8CWGj5GaushQQAvTCo1mEAAthvpDoRW8WjXaA3xZ5bXttFg",
  "key28": "34TkrHCNxYBD2HY6a2EEbUYKkQ9FGFX8e6mQ3DsEhHLUsaV4sP3BiuZ3BYsLQD6uf5aXHoUxLaV5GVDPXZiMA1K9",
  "key29": "5wZy8mxBDszB5iJX7DhpvtGgrejEgqFirHgPeECQtMfDfW4vdaYGgrhknhV1iREjMccrLCHXDkxfgB3gD65X8Xx4"
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
