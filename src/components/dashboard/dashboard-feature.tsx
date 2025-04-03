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
    "4mM31enGjabBFjBFy99uA3eBLuwQr9JA9o4P92cZzs2MSgE89CsmT1yWMxP9mKNJUSL6USxhF7dfKqnE7Q3gCoUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bNnpuRvTaEurC2eMN9vSuZZXLR19EdQ1mVkiEMuAmxuYhRvgWiL4tSUyYiLvHyT6u3QA8jYT1pigpcgPeEunkBC",
  "key1": "4uC1YNe66jhnYxJsZmMAKupADsUNiiWU9GrAk8k6q4Ra5ErbsW5pBUHgXPKcr5vUZ5TkW7FWUy1VuEwChuY71uef",
  "key2": "3uBqA5KV2MEnw67Gc9W4GLWX27yt1hjQ78iGVCcHcp3y1QiNARwVynLNqB8z55Pg5hH4d4k9wj3pM5984XLWAtis",
  "key3": "52gW7SHqwfYCJ7N8TLAdBUq4XeHYZEHHqfFsHeTaGpqXQfgMjT9owWcYVRb8jeiqwyKCrNms1wtoxKNXaVWFRZvE",
  "key4": "2GEc54HdBcBN5cTzSHvWfsPQL3eCAHDF2o2u4ap39sco8ae3p2gMsRFZyMAVHeFyYitZiAvrYGU5GZDoYcXsXjiQ",
  "key5": "s2DumV1WZAsEJ14J51ZowL5Yre6Tn1PJy61fnFkpWhiGzAyaRAzhV65uJFfp9zBB9DuLoodSA8467wPoe7s21mu",
  "key6": "3CgfsfBV1p18si7Qo38NT2oKQ8dGLoFLKuJiYaqbEteCq2s1u1DN5QRJoxivdywHgdAwA8J5FV1CwpTY9vSTmxzZ",
  "key7": "53fAcz97jGXTdfnvH3KSvXoFzeR4safL4x32KHFPkS5Rw1xpS4Dx5ntNumerbewKeXvcppcP5JxvTnyjvqypaAJ2",
  "key8": "3yfpxxbvrcPxFeDLYWeZubBw2YvKqRC6Gpo4PZBG9nwV5Hcvh2BnGGRC84G6cX4fBzVYsmydo95QvQ9HGMRnvJvX",
  "key9": "FtLFEcw32dgdZDKNEUqSckbPsxH9WrvVciS6jojzXXSrcpBncF7qRUZupXBM18C5kSo3KvueFCUDNEXxcgGTnsk",
  "key10": "6tVnVYbAhDagyu1tRr8vkRfkBDNRZYCeJrjuPETfSPNt4PyNgcrEGGRRsgSWGtvy7bp49gmdzMpXU377CoXSpys",
  "key11": "2FaHE3nu1puufn3hgSLJEas22QU3YPuadBfTYsdN1Tt4a9kDuezL2i3ZZ1KmuYN4Qw5FvqG75Pjh9HqCh1ixpfaa",
  "key12": "248kMRfGGNhqXh6MFxKm4revqXexpMhADavwjVzHEFrbUAoqEF7ky9dxkpGR5qAJ1E5uLgqkxn9W6na855KTwG6x",
  "key13": "5n4DmJaXCrpuG9KYGsuJoY3iTNFrR6S3GBbrQ1VcSP52PReY36yfZ1B9kYmjszwfPMb3BgcAruViz9TqzPCRjwZW",
  "key14": "3PrNhrYVTwxuwnbDa6pk4BPvNv6UPLSY3eb62sx9b4jZ1MReciUBWnNoSS9A3ny8uTXjpGDPLaoJzv9sAqvSdDUy",
  "key15": "7eGfN6JQtNQKfgNEfADDChA9QZeDmK6XNKkrux3s7rJMozwSDR7LZsPLG8MKf17kEPetMeEievMfibNuTfHheoq",
  "key16": "yj2xh6Zpw4kjZDZfSNdzZarCZNyZfMzPaLycPakGoBvWbhsAbDsYFkSYX6Uf1mpw13jysuKPEavoV5iZVp35MU3",
  "key17": "3ikEDfqeHgBW8LECqbY6dUGk1hynCYP4BnNy6kJ7ktwsdpQamTES9G66QA6F8c2cCipBkeSFmoK1DTstdnEEqp5y",
  "key18": "4JxbUND87zNA7mSLQtbNjfefbhFesC1X1HBcnbwj6EaGSbmT2rcMouVdArGqNTib69J1Yc4wSepghLFRnU9dbd2B",
  "key19": "3jZZDoNM9PxoKB5gXoUD431F5Mtg18P5t8epa5kosdhNysAfyKfHinakfGHyDrQT6d85zpH3rZSHaD8n6DLSinGT",
  "key20": "TznoN35dWtzozZQt1RYFexjScFxwXoE5WkYuejJ9jm9GPXe7oeRmE4Y9nps7X74kbtCNUJSpC2GXPSSvodGjjUC",
  "key21": "3K278maYjceYMasiKQ5o5egn1fe3DdQsDUuSgZEfGdUm5HUZjEM7nARWsvYcYfZsh5TEbRRhFdX25QdCG9Dm56VK",
  "key22": "3cjRdEER2jgc71zC6o7EA2DQcoyaxaT1KDJhsLb1wwVBhrcy4bJ4V35GsmDWS6tjh8P83HqFx8ttUxUSTATdMCHm",
  "key23": "3DGewjSpsqPqZLZFXdsapmP45LN1gCvkBVCNQtVjX2tcsjAWPYWr6YqwjboHFKReTY7Uju7qCNDHRRkxPTwjmuSg",
  "key24": "3F5y9E47ZfYeu5dvXLhYCcxWQrXXqXzRcdP7BL4f3B4VoPeXz8xVb6SgadWZZo3DYDovZcAcGsJEc495LGhnbtsH",
  "key25": "u15v6cFVi7TweQ9RgW43GJ7e3UMCDQXrVVvuQcejYNfRrWibL7KG88ht746fMueRoUUnujHicnFTuphWuk5pV4K",
  "key26": "2CdRBZjcwqLTaYXQLFiCWYgD7WmN3YiwRpSee8zpVfsf4QThUAK8orcuVN3ibp3FwQ7njrhhx3GGT1BqwUSEWAbo",
  "key27": "4oi84FBcFPto2YGhLRPAwHnomdhS4jiY5TZkSnGvUU8fKKyP4txD6SDQEHEgbt23jSkv79XogXk47bfSdYoY5dHS",
  "key28": "2XyHfAWSo4JB6mCjNhauHzmY6UbnDyDiw6rFDa5o8vtwN3vVuYHmmpTjNc7jxXGPxCRcGdLUb6dwvaMNLeHQkpwF",
  "key29": "L3KPCJwhNG32GFM1U15JuvE5Nc269bhz8EvE4AiRo8VS1wuZRPWjq62NRynpykgTFFCK59CGFdUfTtVSh6ipdfs",
  "key30": "2UNVJmjh6vQGVxuPbgHqqevmcbCQKfUBqqRp4jvc7SzHcVyZ8uCqdGsFV9kMMMJS3pCCZTygx3PcsE94ZiENMX4z",
  "key31": "3WuygTCmADr48NYG4nKxq7ni3NdtGPapVXjk51oatLx4YNRphQavK2XvMGX4VwFNB3y6LB2oAZ6LehDWh32ke138",
  "key32": "3hgLN8tPQ3BnpKN7BBwTvkGhSpJ7ZmQcvP3PwWsEYTs19nCVTGy8ZuSmEUpy4je1CoCDy817ja9Vfoe8uZLmnMwy",
  "key33": "2PixHQ76oSo3QZHK56f11wtVnrbpLBR2swGCmfr71t6Y38ExRNrgFgKWbviQEQTcr7ff2ZMgZcmR3JLCpGpNsity",
  "key34": "3ibwtJV7jF8pXyxwj89FpAs1KxAUaGPPNZ8fciqeMYESScGyAHN177HNwEuETyjWhzbCBpdpBbpiXFbch2pv3M3X",
  "key35": "5vex76dGfgkfhEs4YBKBm6p7y3VCpZeNZB9MydRjj1He8jb3UawovbNLFKwKoLhJTeN4jqpkbZ7zpTt7Mc8fK1pK",
  "key36": "L7Zc3jDRr1pRWrQA95XK2fK7NBmuBbQftygLPwGcg8hbCSyjomLFvN38R79TJizm8Gr9isk4idJmZSLMh5cTSrh"
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
