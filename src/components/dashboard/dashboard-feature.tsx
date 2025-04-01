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
    "4SWMTQatY3i3SodnDLvtWK6FhjVWBZ3RRziRQuRZdFydTQAKxrABEQWk5NpixGdKeohYDZpAyEtjv8VHNC1Z4F9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WXS2qK3dBST35fYUdGgQ11TL9tfC6wHnEtJf4iX2zQDkJZgQSh4nNcg3ftyYstaHb5Wyt4gokX51UAEaLbttuqu",
  "key1": "3kUFqcRVxTiz8nsPE2dgfWPnAGtfZqq4m7XsSgNRv782mtRQyzdtFxAgZ4xHaEAgT3Uj8Wd4a8Xra8ww6GiCNSEZ",
  "key2": "3m4RwJkR39m9dax86RzESddqhsxiecBXSfJtZAPKM757STvuHJRHucEQWe7RfXGtwyw7aNuT2TvJ1Wd259cn7gB5",
  "key3": "4ZhUFEASb85Pj97GvyVusVucCdyuwCSdwTfGPFRPABTRCobamovxyCd2TKmL5iZrsPHUXYefeajvHC2viSUV12wu",
  "key4": "2J1zpi8fefWVTQLvnp4Xk5KBhQ3XNxbgtbKUoMurD5jxvswpPuHr1iSbqEirRzEa1GvbZTQf7NdDZvjzNoYaxYWa",
  "key5": "4XtXcrr9L25dReQZQBsArTJQcUhWQhcmMZJEM3z28RemFWqsRUgmXxbn5tTNf9tEZj9bgntDrCSNFnCEJaZLXaja",
  "key6": "4LnKHpTgf8b8HMn3hgGgYPJAKs8pzRa4xZQacmtc8yFvFmsr3NgGU59eCW1v4pY4kehnXvueyHp2rTDDxpV1cupf",
  "key7": "3ioPXb17qbeNBFD1GiJFoNxhu4hd8xEnGscdK21DW9LtSn4Ma1fXzkbdwMdLX2AaG3F55bnj1BUYMFCB5ryVZEZK",
  "key8": "q615ngSms6kqB35zD67aps7tGkoWtoTZ2Q6ugBHj8aVTasPC5eUAf3Ae7M78QcdvAHCbyNtD13i1eHsjAYdQ5fr",
  "key9": "u4e8EXMWxYBwtovH2RbpRuqAfQ3S7P3AgpSPQDCoPRuiuY4ampUXmcoPRkLbz8cnYuJebz1kadohwhtkoj43ZRo",
  "key10": "4iXLiur3yaBBHGfCWGJozfz4epbhLayi2SCEor1GtKGJp2pmce9GThsR9kwXeJzCaMzDWhbmL6mB1NdcEbmzoGZV",
  "key11": "46SqSjESvFgGj6injfs6SywpDzWKCe2PJuxMPv19QwE1hQEXu8YWf2ws1h5qFuRbrs1CduQC2A9czwoKFvbGQ8A9",
  "key12": "63msskhdnBDaVw4bXvSaUhExVjggfTNFB9VTNGf2MpLULZBFksYnETmXPzua1CMTmvDJgfXoKfQ3DjMuuQdzF1aR",
  "key13": "2fkZaan7LjfifqGduiwXxzYBhpjmxPEF1ZjQQgbc9fg47oLv6n7MULRRwUeVWrXDNJk233k4J633UxLwTpcqp59H",
  "key14": "2C1xmQ4zWwLk97eTJCpUQr518kVUPDmAqHH7cTPqSxw6CnixQZiQhv2qbjmY9QFNS7f8TovaKdUc6kVkjnKwy94c",
  "key15": "4X9eNvSfLtDoopkra8DxY4sHnCnP84ykpPCrMJCxMJHFMGJ37x931AKzpzqaVQNFKuF6ZJmVSnnTXMEZogNwEgN3",
  "key16": "4kM5V8N7FVx72aGQQfdgcg2AyUbbeWE4ubcQwDNzaNahfSg8NhJ9Hcp4kLZWNeQcxViaS42UJxKuSivnDVAvuaZt",
  "key17": "2iByabyFyZdBmW7tTZiYxXa3zqhv2bzV7GWdKem937AX27FEGDaWi4ia2ijUuEMQbqYAK1owby8cNmuTncrTW4Lj",
  "key18": "qPiHU7x42VY7pGCvM9ygEfVzdx754GTKop46KChCWxrS5AaMYaagXnRuJfdiWV4iQFYsuEYv2fDq5Cj5Fmhd5eU",
  "key19": "dVvCYFt2XNJ9kqvufKGMFPNzsendrvf8bdADZSYYKCmzXm3KQcxqALcvQowCbh6aBbXzP22cPfg2P3fLXzYBLQb",
  "key20": "4P8H6gotPHoqRPUa1rKntGzvbBJDzAY6xq4YnyVXDFE9RzLRnEx5ebbShoUDuC6RmMKjNCmn86Jc1knABPenAWM",
  "key21": "3XABS36L3ZXUMRiGg4q99UK4TRBhpSk6QacqG6XxyJHeaFGFN8JohMARqZVJYFrgrDeVeRgTPuHri593ygbHmTwd",
  "key22": "3yoUvSbPv53XdMVdNXCSHy7szCWwo6CGwYk5PGAsaM8N5st5VFxz91K9xZcsSFo9uNQrXXudqKezAsqWah2NxvsP",
  "key23": "Dt9Mgvfty6zG6TcgUvoCJ3bdsG1W3vLDUvD14JWkNy4pWeCyk2sHVLFKJ8WLPzuFQTadJrothWb1mN5an2apo5t",
  "key24": "3MDivmSWbHxc1i49v7zmd24QzNuZJjd3z9EGSRePrTinPvUwrHGQj5jpvZg7nvpHQAotuppvg5RySs2Lh9LMgzX4",
  "key25": "5arLaC29QDcbnDiu7wyqK9fAYkVScuAvZNQgzXVCRjgRY4TVsSPGi6TKMn98grzWDRGSZsJ8RaAvmm2KEvK67AZp"
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
