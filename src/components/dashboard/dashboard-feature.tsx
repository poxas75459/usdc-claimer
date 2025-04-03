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
    "2Nc9zr4s4kcawMDh61H2TTFQYtDGsKDN6ngsSep6unqBjPxRMEBN1PnwStDHCBAHZnfcmxrN4vtZH5jaXkuF8F1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dMN1LHEWL3nT8RyHcBheQXQeFSdPmpX1TekFvFGFArDAtGYXPKzMt7VGYyv5iMmo8pDkP4GYHZuic59pWAWJtQn",
  "key1": "4tRsZaLPjLUCBX8waamFjZQsZ2gjNhFqbY3KJzNfBV9runHoHDNp3VqNnKKjW4c3XA5S52curqYyPba6apf5fmpb",
  "key2": "44rpPjcvipxSBmPyGctJcDWrMfAjtMiETT6jsMSPsApebTqoaJA5f5kd2kqs1FiGDpsHYKgw4C1oRaToMe5eEswM",
  "key3": "5rjo2nNf6eSTUzbgRgKbum55J2qSKwG8omxsg9eDNXofU6TCZZMMPytiM72T1bpnoif7ibyZSym1RM8bv2PgWk2V",
  "key4": "3fjKrsTkYc4LuomLCTks1CbBH7izdUcsGkrUbJBzqdgbw6EctrMP2cBerzE1Fevncx5M4VH54XDs37XphbPv2pbE",
  "key5": "3x3Ev9HQSjgcPLxQQMaYUDWMcYUm8A8aysoFSkYBUS5XMLBBHUWpKUuRY9bLHusuSRMVLWm6EbW6uj1PAvGcDNKF",
  "key6": "2HbtJfTm9DU2B9s5nFGojeazobXNRqYVhxn5Q6SyN39KtZNJjTg7JZ1sxQA5ZXSVvJDyBjuimuBxo3reVth7Saga",
  "key7": "5fYLnAJ1QepSJEeoJWuSVgmG5tmzwLfAqEPXezT6Ap4VjaH6Sqbbgyo3YoPauSDUSTQ9kjavcszSXD2VsPJDxKJ4",
  "key8": "2CB4nvHbkcJ1gK5o4KEtS4qq6RGKk7qdrudUeWHL7pEhVYNY9xqVENAyYJp7Cvg9PyjunThRfSJDzDeZGVYUwmEH",
  "key9": "52bqJWdQmRr59HpwUMogvsxf8fBPDB452TRhwNs2DHt6F4FCfQV3tgNyxoPerpWT6tRjgSmou7NLEtCCxvDTJFCu",
  "key10": "UiGvRcR98X4yuPbCYtFQ66rQKaj7sc5UhghW1tsJSkZRESPnygmb87UTdnYCG8bxeR955Fndso2pDqe6DkAhr6s",
  "key11": "4u2HS41Y7LUuwbESoqG4L2jxNooKKXoEwmYFkDzqCKpJPpqRjYaNikfnJmmC1Ko1dYSTh6oz6GSgjhK155xhTTyU",
  "key12": "3gzopageeV6MwLGTSwnYybtkxNWZkQE3btRYab9uUobgLPPK37g4oHfoTnmaChrMyPUWHhczEUj5ZdBE9t5DQEMZ",
  "key13": "5ikBL4PSaPi8XXAr7eQ3SKZCPAPEmGJEQkTcrpyXcyyaTFr3D3xwNxYBAPXiGKWxukTd2ZXYELyWnGdruaV9JNM9",
  "key14": "aJVs4nXy3eXCwC6Fnysk7Cek4E8tRMqsd27HVbm71eFS2SxzuvPrLR6ruc5zcgHXqfrAMPWMT8Qsopts1BDJSeH",
  "key15": "4sHF7Vnbgu1osGHqHSEaZyVMhs1UX3hPxzvQrVzGSe8xwV1tfM4Zw49aSoCku7odK2bUJj2z52R1BDpEpYK2jSHE",
  "key16": "5zgh7rcu22kW3eqvckPaqvfqQmjgDYoUriJqGxjrNKHtfbHAs1VJX8ew7szYX1LkWRRgpxHvmyM6T5NUZZUubCNZ",
  "key17": "VYEkK81px1RUui3tYvSrZ9ogXdxmEfxz3Eb3oBkuWWNSiVxyZvM4ktmsR6iTdGsT4P93ui6hKLhfsdVsgQDucex",
  "key18": "27MPAcwbcCt87j2H5LGUyxQ6RvZs56zTgPJQwu9UjssuAopPX1wrfu9vgCkWg5U8TmQR12mEN9bHi3neTkrkvh5m",
  "key19": "5ePML9kiV34rNKcv3bQngRybpiohxxWprhZEQjWoF2VjwiimpKb14xSZo2nE5wgyDDYApxPJWkJmbCq4HUTpHFeN",
  "key20": "3HisfVvAUrdcU52cRbBgepTXbtBPBZb8soPaYUgwHjW1fJvHKUbWRdzM93zNTBdBbKa7WTZm9bs2mCrNNPB1ZK6r",
  "key21": "ssmrSY3jQS1qnt88P7G5WtQ5nX7PitZiaFZRrHhLsVPV7AAhuxKrVQNfhaAPz27B8mmw7EBVqBpqYVPDC2aZVJx",
  "key22": "3sYxyTeUzTASSUB7GGGLrnBcA5UgGAantdEofnzhNZGZWvNbhKtFvXXC6UdvPAXe3udEpUjpiLVAz4vg1Q9RmHNA",
  "key23": "3K4yXCv646z9UVANhYyMdw69HyhaeEeeAPqgTBB7NDw6UbWtXu1LGhnqyhKniyW2VNbFyYhi723UY7UYC3oefw5R",
  "key24": "4BCDWbtAvmEW9LvpvnhLoAHTUSfawUPVhiWGdLvwpiSmHr7vJ3YzFhrVCPCaY222D4qVjmSM8h1LA12EX48RMLn8",
  "key25": "4VBQtrJt9C4eQZJkbQA62iPSPodaYUjWw6rvvP3fSsDvruCa1QQwzTd757d5SWDpyNMAp1f8fVuRTtssaTNWAB2u",
  "key26": "2R13ZV2MbVTw6bBRjegHwS7DXxZZiQDEsWBZBGKryP6M7EZX5EdhAuuVikrbFKidVd3SZerRfzDimcVfM4cw71fn",
  "key27": "5RXuLM1QaThh6nCoQ9eMfF41fy9XMXbJbSDGGACWxUPVGWF49gGLFFqEDXo9eQppyhvUekKGj67LLmjWaAcQiU1j",
  "key28": "5iGtBqVMSDmJAM9twkoNG7bXN1AUsp91RJa6iyYyPNh6sSMEdbQTLExZuVBAzYsFXBRM1YY9LxycvPkjFHhrE6Fv",
  "key29": "4HLzgw7ob5sBbceGhXz7XuCE3H35gf6DWxa8aMQ4KH1eWDt4Dp1pcioyzwzac2VsN4nSsgievMsC2HQWiyfkvcWW",
  "key30": "4xx9E8xGqEtuYTDctsGd8rV4SHYogCkU6LNjvHdB4tJMQyxAmDTjsgeS57LLUiybLPFB5Dp4apN49ZwYUDTwm6Lh",
  "key31": "2EAwAeqCgV8jNwx3s4YrXhG3kzrx1APQt3z4VF9u2uf1kdj9ge9jU6E81xkVy9wrDAzwcvTVzDmx15kXkJB1cWp1",
  "key32": "5Jc4yLe8m2FCRXofjGAJ8VNQDpv8PRV87QWeuBrnEcoHFZWgn8tiS57pAANudpzeuJ41GRPDaAhca7AP7ubCRK6g",
  "key33": "5ztJAMXhd1UE4n5vsPufHiDaci8cJRzGfMai5PbyaKrSVnZwkNQbJixjcfzXpSTBCYtFZgFdkHZeYRsbCarZM8xJ",
  "key34": "2Air1WkU3LcB5mmaeuiRtSimRdaGrPYg6TfUfiRYv9VS5ETtkLXjC7u5jDxovGsTpCT24zFr9o97ro91LoZPQT3G",
  "key35": "5DByoZFarURFHpz4iQg5u6q2oqG61dYEkThDvwL9RKbk38jzggmsEVkNmFBvyxAKzHxzWZW2EKVZQYP31iLFgGdA",
  "key36": "4ZawX6ycJ5YoZArC29me6q3trFryehAJ7MUcm2BaU7Hs19RtBNxgj94Dvpeh6JnWeZnYgXoKJo7ufEhYA67ToPju",
  "key37": "2syyPKzFNRoB4YdGdvbNvGvp4MZoopapYYze5dvhWNKuxjxigsKQnnW1xyieSebUqrBT4E1KDKsGNeiwXintuATi",
  "key38": "3LH1xVFByuBegZCVArwYH5HyCYj9SkTgFXh9z99G4fd3RoSSGvDa1K4mgTAEXCt4wUQL7awKJ9R2bYtGKKfoqSNY",
  "key39": "3nnZ2N2X2niED7cSV2F6jTby2tnDKA27utfQZj95v51FWXou2erMyt5SD6qRFHvyLRJRYTazuj9idEFvg1QNQxfU",
  "key40": "4xKN3pQ3jWwNNVTNjxzeXsLcbaopiZJPqz4g2mBNR65uU8JL11jeE7nPvjKaZHhVpyVtvKe9txVkCUga8jEDbufk",
  "key41": "3Cc5hrysTUkadV6thruAg4X8QbA5URLhbKC3h9S38V25c1UB1gT4vEF2xbLHb8JUpkGTwkE66fze7LQQ9JsaQJir"
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
