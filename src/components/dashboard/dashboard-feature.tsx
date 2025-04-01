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
    "5moMYpfQG8bpUvA3jxcbbNRCKNjRU2dAxLzn5BzKLyKdJzupFTLMV4t92f5ZnTAbSqJadEHqMTkavJJmbsyawRsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xAkBWarMmMD88vqr8QQ2btpSvSLANUGSZtLjgVbF2dTqEwWRzTCWL15DNtUP8DUmSJmiaY6FJZBMT3Bi4xRwiid",
  "key1": "3H95LFBBbGxNhxArosmkhww2dc3qvWvSznadhzUmsEbnRBgKCDniDxku1yqhnGJbgLRtho5mnrFnnDz9Ueg6ZqsC",
  "key2": "gHusMu2tkFRcNnkZgbYDzQWdhesbRZoQ1SBiGhhoa7mBbGXQfJeGET97jzYFKEgphm2sNGecT62QAACAE44xkK3",
  "key3": "CLh5xFGkeAkPVM5xewfwMH9YjJ79Aro4Hj87DLV2ZUULRr24gTLPpdV4cABC8TQvsNLUGd8UziiasMwST9QL4q8",
  "key4": "2T5gfKFJnUFNqmxx88h3cwUtLxUxDUSc4CtyZ79EaPqNRdHiTrgqh5sdsg5EfynzqDK9WwaRemuBX9TKjXe4krQ1",
  "key5": "Bj2rgtTNhbkLr8mohrVkoQRiT1uW4ujJQJhQFTTJSLBkGT7jvZj8ncfjp9vM7tZjMDY1ocPoDyNEdNCTuiXCUBN",
  "key6": "4XnUMDmagws3bjp1jJ189sVQsFQL7B1kokCEE7Sxeo7zwuSvZHmUNZV9vxixrSKVQ92vQhDmNebQe2DDA3NFarM",
  "key7": "mLdiStw6tCJfybTpJnrDZJuuqNBY34jZaDFyTCW7iCz5ZBe5ig5YXGtCeg8AgQtMzw5tSKxKhrAAR3Z66xtPmtu",
  "key8": "D5hHoMp3MDzMLanyqGhbA3xS6dTG3n1pK7xyXNoPawpq4MC8RA6aNT56t7rs6RffMWwoqNxJuGDXz2cwCpgB7Je",
  "key9": "22narnXGUJJ9CeLm5pJjXTGEiBtVx9BqCEiqKf8Phvgg2gKpUKBbMELJ6otrH9Bor4A5GwzjNXofGqyGnVRsCesS",
  "key10": "2o8kkAGSeeoeNKyxhsssXw2rW3KTsPTwBc1AbeHW8C4X1XE4TJeb66e3eQ3YYkDov8CAXmcQAfSR682eVaXDxZvm",
  "key11": "5K9pGUmA7CYRXNGyD2Ta97Xheme4wqMjae2NWDvTn654vm4YKjTmHJgd7BuKQPx4fydJmVNqgs2HV6ni4nq9HUoA",
  "key12": "276kxmhpab7uWUaRn4NCkKENuAYh9Ze7aqU2WRsiVBKfr25MV8DmpHrfkJvtJEHt618MXpJSLfVyiZmxahji5Yzk",
  "key13": "5byWWYqYgCn9uS2YgjbtZkZUi7VwAY8Uf8ZVKUr6kjVYC6XCjXAtKehHtzUMhVPx4pGRC852GcfnAsgXP5Rzys6r",
  "key14": "371eXt1gXZCtvT3ARN1edrWUFMiMk5dtSSSriSGUnH98zgPQBzRxfVWVxYSgSFPoDc7rZaKGTUUf1g2KPSrLgNic",
  "key15": "3YYbsFGt2BnMRmmP1tN6TewpMYSAZGnKoxd3sPY7B3ejWJRFxeki5VwWCqGRJbv4Cip4kyJ4KhvCucfxNpoPgFvh",
  "key16": "4QZ2o5xYuSG3Hn6vHEscbtXbFHzK2PnsAXWpYNTdkWvhxaVYNZwnf7wMQ8SSKXLkuSj8ozauecMpNwMFWEgrC8Aw",
  "key17": "4hR8REK7aAmF1JCSSCHimSj1MRgYg4C9z7sewbVTwCBiYN1SrAzP4jMH5veL1F8pHmnXaT4Gb12Rbi6cJba7P7Re",
  "key18": "3HCeXDDegfcmFMM8CaH5djZM9qavMkSfVtfmABoW1K2gpqbtuMEn7fS8sWtCh2BD5psq3JToGjXo2TpdLyMLciNd",
  "key19": "5m3oFeTjGkTUq5KAzcL4mY81WgrA79KeG7QTF3ajxQnN9UJRJCWErKv9DfjuLY7pQvg2hs3GaSEmnGgsVf2LqPiM",
  "key20": "4KBjF3nTuA1EwcV5owuShDLjxBKt9W7B19RjW7QFrPPVu2e6kbANFJVjq35T8AtA2R62guq8Aku8tnDbb5acwRg1",
  "key21": "2JcLPdK5wjhBHHU6DeuazRxa57x73ymxbebgweAGXNvRpWatS9VfjRyX91ghVoiUyptEYQxeG686hNLfiSN1zQpF",
  "key22": "3mUhfL2WRZgfVANTMTX7a9idQjaHqEk7rU9pmn3a6HjuqZ2KbCDZXszk1QytAdTt51wAQhL4XZ9QXg9YwfFc83VG",
  "key23": "5ditgCzgQxZP6fto3weZ1WU1T25P8xm4NuQgNLU5S2K4zuzQSstboskwvFXaDptxXV541a6UAvR6FUzxAjA7mftt",
  "key24": "2jE7eiWtZB9RezgewxqxrBM68dQT1Xief9ovGGg91SLATsScLimzWAnUH8sTGMMcJF68FRKhDBKYEE59TLDkd6ez",
  "key25": "5cfiJrmoVsz8voRK9qUCUYy7xmmXvvZn4hGb8SKpDWiuqVq5vmjef3WvbW9XpM5gLb3mzbLRvgkouxqR1Es8fofo",
  "key26": "4tpi3fRhcXxPWofGqSm2CXmKqvFLkZQkhCyTzPsS2PrxsV2sESNTit3CAmUmC191pqnYcYdKr8wEsnQssmRscBne",
  "key27": "5fk3mVPLPoutwWRUc7Az63j54Q9JTAw6q2bJdLv9hQevsM3LNVZApFqdU9doygmkn8TbBvWpkUPXfK15FykgWUY5",
  "key28": "2Dj2VXUmoRgdL6ZtJESA6wrricq28qUHJnyX4r65aF3dnAoqfsw2mkKUY1fZ51P2VB5QUD34RBowtquwVEWetEv1",
  "key29": "4ZYkFVRYrPbdro3ihbxEZFXrCGJAPchMFbdUye4KjkuYHbPpaSxYJbN4ksqDdCmEp112Xmv4TuoTfweFnNeo32QV",
  "key30": "61sk5WUVkp5NfqQygPiF6V3Ni6S9JL4Tav29czEnKC6UWSSNqyPwFK2P5SZiJuVvHqzMAuxaxf3eaTYq3beHQcP1",
  "key31": "5etfrNAJBuiQVYLg7ESeHT9KMWuSm4ad8EHASPu7b2jADzAsppuQHVhXhGFT5BCiWR412mksFNbM7iKN1LQmEhQe",
  "key32": "48Va7C5JtSYsKB1hA3rZEUsEUrkyaEWVaY7kMCuL22Xx7aVQL9Sfu2pwcbUAXwEeQ8yvwS3L1ZydKxZoRHA6QEhz",
  "key33": "4DtQSbqGP49jGaLyExGDVLxsk12kaT2Wtf4UCNU9XHCSiHAttKrjLgWRqX77xyAdGd3DXoz5dRbn4nxcpLEumEMz",
  "key34": "4g1jXkgr895ypiDrbc2BXh14geEHyTTCyzyCmrpK9Rn1md6dMsVTFgDbTjsqUrTejPYArJ17ofdY2MfTdp3Qfyv3",
  "key35": "4Z358EAcytGyUsytQFDkmek4xP2kLoikXcTgSQHKNF3x2oZVNFu4L9GCXDW3U5K46BWnC2N5tLwNUxAKdDTiTTBq",
  "key36": "5LWcUcxD4ZxX196kJoqrdPx7Foca8f3v3aZnNytyiBzD5Sc55MFg5Eamyxbj6wZBSDhscmm1secvmHGbFrWK9on9",
  "key37": "49No5GKSZqRKx35DPK9KbysHTR29UfMKoW1V3v7zZeCb2ZoWgyCkRm36hatAN9kxeAJ36ekBBC1PBwispwxyhDTC",
  "key38": "4Ra5w8dkqThM9bdM7tgqScTr1hMUUFyvVzMxeVnzGC23oEv1EWUuTuAjJGCoubcif7JqrzKjZ22vpwKgkjHTpUwx",
  "key39": "2P3JgJPRpkeLgvkNPXCaYn4JyBZDMGKawTbwqBDzpJL2b5G3gqh54yFP2e4upsozoDboWGpnfJnMJZnSwwT7z7YM",
  "key40": "2mF1gcZx9wBF9SyxCDPWhQRKtU3eHCAhMzVVAiWKgFu7WWe2GNY8drrV61itPanyXRGmHfGPQohaiRd2BWeM1E6g",
  "key41": "5MSrF5xKEgknFdQUGX8CRgF2VDA1JcZk5KGNp1hU3HMMAS7q7Jwg5tQP8zkwmPkAKTmyE9oR5TchoektQHKyxvr2",
  "key42": "3oTjPy3uhVLQ2fZDUEZLRfQPWoAmLrfnZGBHGDhvc2xW9iPSjsymAC8URKwp3svY8rV5vSZiAU2mny5vnL6r66eb",
  "key43": "4nD2aZtNxcih1XeBq3bwK8qeH1apXVnxtm1wJMr5cS3Sc8PedPpHSjsbvJj76MaMoDFh8BcS3yvtGWicXcJ9ptCj",
  "key44": "2WKivAHHpLDiHHTmg2QDAwErmk6SPoXwHgjfEeUdvoLoXcT3hsistTcte3REJ8KfXqjEgkYoyqpEVxYE4ict9oyj",
  "key45": "g7Lsk8jhbg2V4njGv7QXop9Lr2YP8CXcdqHuvAJ1AnkAa2YgKKdmj2bWWrzYzvbWndewrXgyee2M2Tg1y33JvAv",
  "key46": "5SSxk5x9tnyGaec1UHhJ8uWpcNxbq124TbNmEfBwPHGZ8CypX9LXs25uKm6QmLV4pk6tVmW8CDBRbKsT4TjmBA7H",
  "key47": "8QzbB8GTZbEXhm8U7ZqotiUpcPHUMJakteib9rPoYxrbG6gqVj5mVDAJtF2uYAFwGBLFfTjfETxi71ARdvuc8kH",
  "key48": "oDL2iJfTgttuw89dfpzFtCLjiNfJEVx16cuKvKvUYQ9uheScmLHC9ZkzFfweNjryo8aYCtpEDPWxtkQEbGpjGwg",
  "key49": "5vZkfkbGWdExgLkh66w7mBCXbmYnxnEXV2H7rEmzRjqvMExL43sCbSYWZbFLB41MwovaeU8pgfMAKbjYf2HbVfvJ"
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
