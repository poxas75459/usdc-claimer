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
    "4w8wcaNHsZtxe8rzMGn5qRL73dvKHvYJcurY4KyX2JZXPdaemrhJmRnKtncdQ5GmZNe8SXCNzeAM5TH4PEaTWphU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVknywAqQgdujXhsz1yEYcENeiLSfyQHEC13KobFzJkeMvKADEMbGdvQBh8BM86oUhAxGdX1A6HSBZiLvSbF3py",
  "key1": "4XB4US5pqT6CitpRHW3my83eytbP4ZWkYjZA3hUQB2BxANutfACGPQFQnutZbfWxG68LY4QzLUS8j5edCJVZomx",
  "key2": "38DisJHhmBc91MNFUB52eoZQBxjX5EXqCckrapqqyTdvssyAQo5im5r4DbvBpBZF4RsfyJjrqWMG8xs7nV8ZBUD6",
  "key3": "2fBRWebW8szZasLpPRsEEXXjaV37f6qGUMmt87FHQ3FxcaE6A1M1vxX9zxCr2qwVxBN1iZtFF17WxaxgVi4SMWsq",
  "key4": "63gMvtscCatRVo4cQj4E2NrDDKoyqCqusttyGT5beMXN2CjBFwkhr1TTuFy3BxJNyqt2Z9xQSpDBH386t542csPg",
  "key5": "wpXUpXT8Zr8sMjeeJWr137oy2ihQ6iWBVtps4iXATWEb6hNZMNhBAifzJGwzYaiyeewiNeVUgKtrEzeVAp85Fq6",
  "key6": "5YMwmVegKKaCfqYT3GyKkt9UttSrQt29SuWP55dWiQvpaUZWqKgfGztG4N9tvBC5CstVBVCcDxWRM2vE5ZrRAGqr",
  "key7": "3X9ayxPZPU8mqy2uC1QT1Z13J5Jv8hjo2N7vy8u8eHyTxoxcmtZTgJwpzxFDwbAjobD87UkrCqR1SK5ofS1CZq1B",
  "key8": "4zriW4gyxevMB5MPjCz6XiifbpSxFtkAYWqKhboQAqnoTPLPsSrTHkS7xVAjVqnbTpLX6xNDR88utZTfNEcTR49t",
  "key9": "3AdG6YZ8jsdXDWHQ2kBCXJ2jNWJxAfNUtVFyRSxDRSCjszmbMxLbC1114NDg6CD3E94T3zs3nAibCpn8vaqTpxxH",
  "key10": "48C2GGzGiH6S6YPq9tpXP7E6qchygCV9ogNjRmtJN2r6p48D8CCJRQ5pT62mCecgakSJ84jSpjgGwmhF559ot6zU",
  "key11": "D9y94LhGvsBrPnboxxbJC4H2Up6t67rLagumjKqmwv6nkDxEsVVunNxQm33MiDR186T5NjaC2BNR7xbeDdjziHy",
  "key12": "26uhLuGy7DUGsia1LhWubMLTKFQCyMsW7BLTE1zz6KqCEMJyPL2jk3ckYESvrjSzi1WxX8yBddRULZUcP1DhkAvP",
  "key13": "4ucE6fevU5ewPe4c8ZLN9xFaeTMxNm8JgzNYqnmjYCmjBT8yBuPyz9L1xUcMqCTdyWhyowzizfpVRZmCQyphgb9v",
  "key14": "5GQFixfT6JucKMR8dBmmngxepFNQeWAQ4UDcTJVNakZHkPH5Lb5ipPjAxjrwxbZnwe4jeoxnMKxHSF9oaXjwS4Ho",
  "key15": "n3hPkXJbxqLMJK5676aYygYjGB7Ucux7Nvz99ViFg4pbWJ7tJQGsuBbP2a4vTivZmpLWMSwg4tgeZeGp8Zzqym8",
  "key16": "4NvpfoX1ZceirDqZaRNL73T64abApZmSs19jiHNpujeHReV4AkvfbwpwH22CE6evMhkbqtYmMo8MYWcrJ98hwY21",
  "key17": "2eysnfALeVZmioiC5kTLq7Zs7nJVcHiWfb7gc6afKtE3VgPPi8dKDPzVxJXzF4e9HsybnCf1SZw74FSxodB2B8sW",
  "key18": "AsRx3tC9aciRdW79dtazPTE9eZivzprVzWqgiZfNpNC9vLfTYsac1QVB6H2tbw1VWJSBX5AmGDoQ8pbKrP6SoCQ",
  "key19": "wvcCDDDRTBhHxUgQgzf6sBuiLbdUaXRek5Cj46ooSHpN62czjPYoVVAqGz2VowWSyR8LJS6BdhWxbP341rE8EJ6",
  "key20": "4pwPBcWATGj8KD492TTTPcuuz5u3PWoYUSuGr38WgZp4Y8s8Jboy3Mpi183T1mL9vJLpStgxu5bZPn9gEdPkP78w",
  "key21": "5Nfjw96Jrz54NLoL4z3Cxajon3qM1pNdRz4iKebo8hmf6SdEyotsKeYJdVvGGE9EDrjrSAXdTUQyhSzGF4RSHt6e",
  "key22": "4agoQfgiHeGbS5g9qyjqTdsAvkm7wRnnyCaKoGJovmgcLVD5rLvBuxNHG6zTUzVu2rarPeJpAHQQ1KpRVxDzcu6p",
  "key23": "2t4k4qrc2sgBqiVbMgqLBP8UuuwHuPi9PRvAgJqbq24vowna6rybRcd5gKgtZRYF9QJtbZvBx7KzSQyiytm2nPrk",
  "key24": "3sbqyxfxoe25TRoLH5KodR7UGy3Nar13qa1hez9jMNKht9GFXdEvuAWKfVgEdzcfCXT39oUv7az8Luq5mmTtR2qv",
  "key25": "4xtt8K4Em4HnNM9GD7DSJHxEDsWwXuiBpTgtN3DPY3AyqyVNQCS9ggPihqFjZcrKSWX5ReTzis3dFpPpnCkmns4m",
  "key26": "4AoUGoEKKtatyhrTSfCEH6USDey26WWh9XtUU8nUqwx4ny7yqbRXwWmbC2T8Die5NB1TBtRqPzZKDSZJMgDipdu4",
  "key27": "SJ4EhsDT5uzeiY9xaxfqA6YEUj9fcGmqEFjzvMR9EEaVCsFHQKhVTB4BiuU1L9xRNfk622quQCQYKK9ZD7hTf9T",
  "key28": "dc53nNNP4kwsqth3H83ztgPHe3TCC4MBU38Epsa1pBtZj4YDDXPXFKgHXruaRxf4tCK2KyRSSn6oFghffHAyZeW",
  "key29": "2JnsD3Wy7bRv71VWiqyxPiQhwK6iaxiLT2dpqKnmb223VgX15vYyA9798TGXrzsj9FYJH7pYiPuGJ5s6cBupwbVP",
  "key30": "2NokgBb3dbwc7rzYYhLYEH2h8VRHtf3hRihFmkXNnLcQ8QicC6VDcre9j5BkNQ12ddWFguDNw92MbA9qKjQ1esCA",
  "key31": "3RqVM7VtCxZHNnZCrvEGNcHVvVsPqDRtGrgD9jty8278U9HHMywkAv1WTq3CwQKLst8ngpkiY9e1nwKUSVD1i6CF",
  "key32": "57pYmPsussJUFMqgUnKdME7USDR1u87ZYNeW5WtLijZnUiZthuC3BMGdEwYx4L6hfvY4VTgRMAZrH1viAiwbX9V5",
  "key33": "226CcxaC4FJ6dnaJ4ZXWXgweUA49b2XTPWs3prHCS6nqw1CstAsXWRg1Vf8Pyj2NntcpPdQmwRno1rdpbJqSVL1W",
  "key34": "2p4XhpFEsXi16b6pLjane49NivUC6ek4tnxppgsgzcnUAJYETb6ow8sVLQPS85Gv54Wd6KZgwTe3FWWXqcL9qQTW",
  "key35": "2TmPJbaB3CcwKJhTBxstuQb9w5mQX1PFxC81PjVNT2aN6WjETaRSkbB9XNhFm1vWwSqhk9UiVTcBszCsEZZubET8",
  "key36": "4VDrtC2vPtYPLYpiXjYhcTVdp5h7togUUckYQ3hD9MsUKWtU2VShGugKtSv3gt4dLnKgvnQ2XHkJvNtKzyBXrMCy",
  "key37": "3LeUs8X1hBG56CViDB5vfceqEnDqvG21SyedkueUQXQdXXskiJvMzbHTbW4eCoAkvNHJycHk7TWYkeZMMUuTMbJ9",
  "key38": "53Ag2zebRCgVSMNDyqHNMmHH4xwtdQ8FrtmLeJ8r4xs4cT5Erz1qbg7AjA8pZct9dPfPgvagPYf4v1724TAMKwkS",
  "key39": "25vNHA753Cby4fM2xn8xJUP3C84NJFXF8C9Zadwn3fg8sRb5WLpmBW45YXiLxM4xP2FwsDhhZerKKkvhUQC7Zee3"
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
