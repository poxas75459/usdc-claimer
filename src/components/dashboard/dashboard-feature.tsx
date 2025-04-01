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
    "LxrdV7YstDNyKRQnLZ9R51fqoAHjNArPZUsXf9c4yhruEjDt6fxe7grEJLZYC2XmP8d274uVnxWyek1xum11c4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NikA3TbHyzfKA1BoFqmNDDTH9Urk1nqNTpt9n4d9FkDGmXBfsR8Cy6vvwJadRSeqqrKp9AzwRa2fCBwJTjEBCPJ",
  "key1": "4xTSSzaNLss4JXR7b8i49C68rnPgMSgJgNx1RJvfFJURSbzU242zRdrm27qQkyBvpmEku572aBKzaCy4GYMhCZ5L",
  "key2": "Q7EBYiBrC27vw98U9kpGjeu5BsixkZ8WLZoF7ZnHk7wE2KFSWiWUHbdXLUznwfKKssqV25DCBkWKxWLHx1ine4G",
  "key3": "5U9YozWE8LBSVPiGb3iQ2H8MEx8qrgiQib4X2368g9cB8YjDWyMRwwhFY2Zfw6yePuxPynfyUSLoXrUexMvypCCM",
  "key4": "36oKLR1keAdr6bXsWVzMtF8xHMFYAT2Ci6bjEfSZ4pFey9S5w8CL9hiuZagUeZgs2eYk8jGAwQUcnjQcnv7Q8fjy",
  "key5": "2XFFyjKbxWc7xEe5xML422wCf7zhgs8dExbi1xozXmVLnVxBAWMNm4BvZqudC6ocSt4TX23gasJtUizNGpQrCvJK",
  "key6": "4sAshNvBkayQP7sfaE6abfmvZZusEz86xStgDbbD9iSfQdLMovn6GNuwX96FFW3VHqkfRxA9P8nL49zBYAYyDNaK",
  "key7": "3gqSdtFqgQWUbsuaTXSYwjdqC54GrFRJaM27gyxMyfwrYbmtrUcYLHZU5TC9EDmwLbpiDAnzTPHtZdn4nJtgtqNi",
  "key8": "3rzeRHXcTLdxusGCH6cEdRrCfaWEWqcyRQb8t4q3PsgbGZTYAEhkyJMbP9iKZQn8DdccPmxvUVGvVqxxhxdMy7LE",
  "key9": "3UbXMhH6VJy89PfzbTcCNL9WWi5TRGeoNW5HFHguieFfxwipkTKhuUgvTbCNHoqQviLuXSMh1AQmZjvzk2B3N9G6",
  "key10": "5dUry3TmP9HyX2TkmYmrkZTT986bedvW9q5rWzF3CA48WEAWYMjmHMZCxs5aGW7BGnMxLPPGDjRiDnzQ6QzjMEnf",
  "key11": "4Jq7bjEAuzL56Lz8yKRRUtydeMvSoZUJVn1QVqKsmy4R1NY77u2KA56yjjjyEiw62R2qcoAj2wpzLGUyzBJF9MKY",
  "key12": "pBVYp8csANsf5i747N2JTuuRSCxDx4V1xaw68k88rWrXDW4xfkKk4gqxcUfKynfizcDYkRwvfArZR5CBB4uMYJH",
  "key13": "iyst282D9Phf7VXVpanAekHxdqhp52mDg11hCKnUWxp665857LFL6BoLTYuX5TmPwaYNihm34aHD1vgyivAiWLL",
  "key14": "2A4ugY12gv4bo5dRtDn9rRDHxT4mxRTkFtudjFQkdyZ13UV33DU17wZMMBYw4muME16Lsi5qe2SwzVHFJDLoDb6n",
  "key15": "47FuWCMrcYLLyp49X4RKpf8qAW946n9MmrLsDoxZkBhyhUswBNBuKMjtZSFPDgp9VBYioQuNt8ZWToB2tDwBcoXp",
  "key16": "f28bDH1oA5Dp2docaTTDfnM3TNMmGiKrGMDwTffH64No6rsmoaCgeFug6ekueHwL8S4mNq7qL4bRcgxw8EviUNy",
  "key17": "jT1LpQssraxKttz5pYKcEaEfRY1y9bB5xTuTUCrrNKbLrrkqcohUQNr2fB9b8b8t4w7f4bbb8vRvZMh9RwrnNQU",
  "key18": "63bQAFuQFmZsvFN3f1BjCGK8mz2CB31MGP7mry5E7fukEin59QnyBq3dQ95pyVducHerKYmz2nursp9BrqQF4EA6",
  "key19": "HXVwsPrA3msNGuvx3HcxDEbuaLDg1u8z5u29NzhoEp1DaEHctNM1eQZ4fi35yAUAgzBn6ENtLKfxRRN7xSAS7HG",
  "key20": "39PYcBcRA2KY6LaYqfjGve4dcRfQWPYZmhypRoBoyWhd82NMRtwVtjeuEKSee2tE8jgYFTjNyW8W1g4sYLREvjVM",
  "key21": "3o8G7krjd5x5NK9cfiisWTExsqppCEp3kFTfV6FPJxqVkku7P8M1zLPDAJZ9NKfqX9uDBUFopAuKr5xJN1eY5KXN",
  "key22": "5M3mSVeATXNbPq1RA9hReGNKH96UD3vgPTaqqLD64emh4MnEuduUe4fF5QYdaWsJVYJWPvUu8um2zv4d6dSWrq3E",
  "key23": "Y8YgJXL1nCieATYixY3hyUFNYextnLMe8xxxe2ZYVk12UYA2sjWHhMNFEYHQANFBTVpDZiQkE1cdmS2vcw9s5ku",
  "key24": "5wQAR2Y4DEF9btXze9mmkFufrXJvo6MqfrMiedpAmvCi48L8ghyVdaupYX3xj3LhYZrPUptDM6EUVWAw28HskzEp",
  "key25": "33NzWVueRUwY3bo97Kqbas9YYNqyVUUrzsMRWeUHV5QWj2m9yZhKuN3DemN7C9JgwBbVwaU8nbQLkvQFzAii2dM5",
  "key26": "4rLjS96vcEvkR5akzdHSGWjJtdMdPw1VxvVDGKm2hgVQipnnyY7yT6KGKcjfChYT5k3P6HiBpkZ1ocoA9Z1vVJat",
  "key27": "3xnTTCdLoXoqQP4nAyHTVHoMnpMVdSYrirthDcFbgNRr92QSVR5oipq2xcYjm5nvofUZjaJKTWeJT1DmUY7uvthi",
  "key28": "3QWt9fy5R4qSANa94Ra4zpK3iAtYwcxd4QwGAvX9PxrtB6SqEiosdCeB23ccGm2RmYJXiWEiKiQyuhJ2HQT9PdYo",
  "key29": "5Y1f4nW6P7qNpevL5vNAii8MeBUspgj6nhk25EZ4GEnx19Se2KjT4HA8UHHgTPYsZqmP3JJcAJJS6xAeM8qRmvs1",
  "key30": "2F4RTsqd2Z9t5ejVw52pfQexUTr2UoYSEBHbfUcXgFx4aVCWUZpsa7cvDwKGQ7KLmEeQaqfFWscH3HNytZNLc74L",
  "key31": "5ZDUxtJhQoXxHTtwtFXZ4dtKrjNMkBMTqkGpiTYoQVtwaAJR8TFLJCP55Rq4U1QiJeHid5zuFesj5H12mC24XK47",
  "key32": "248Zter2471WbDA1YPUbh3kjtpZUJUtCmmnARsKj2GP2r59syXmiofEPjEgTxksG65jbW54RdUcQwGQBiAoUGY9S",
  "key33": "3KEKM4mdoFYb64v6zfe6fcPURMeoVV4hkBaqvTnvqtXzQH7SDdUuBWz5LGgPtbmVF6bPw8iYoSc46yke1H7y5ZQN",
  "key34": "jM3BgByoGibxbGDAM5DA5QaDCQMu5a3KqgTDe86VspGy2VdohdTwWztqNZziPh1JLySRkCNYbaRhkRcAriFpTZD",
  "key35": "ZDTbTtpmasSFJbGpJPa4na2Aw7tsvjRhmkizCVC8eMjCAHswwew36yK3S4bmpF6Le8JV3HQKhqSFBAunDRg6Q8G"
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
