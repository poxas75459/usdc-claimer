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
    "4igBx27Gx5PwGteCFWf3kTVP869T9YinRgv23bi2ncQ4xRs2o6ADPKn2bG3Fj2ar3DN7PVHnXrPsBTdobW2oXf5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33JTRBcscBT6AdnXAVjV7hp6YrpQBUW3mNVxEhJf9wWf8qF2xdi7vwivJvrVfAwyemKi9isz3YfXMK1rNho4y4hT",
  "key1": "4tnvMaNrPw7qP7q3cTFMZVxKVvERczoLDEWX8MB2P2pU4nG9XVEwHA6mi2ssYwYKVy2CCV4QkT51iEPwj6zMpHB8",
  "key2": "VDZrFjoQ1KhnqK4xXnWb5iw768SLVVfB9iBA81GtTJVrLa1yNbFrsReay5GwadwD8frfamJpYnNs1tjN4LHsUjn",
  "key3": "5FR3GSF3ZxLbka382gh73bZCgEHbmrWrihW9pod3e2684PvxvqhvJy5zeQ7Ra5Edf8ATMwvaXs3cysLVoedR3X7k",
  "key4": "225S2GCFE4xFxJrrB1uRVBo39Es8NesiJzkhoPnhy3r336bi2XdoA9ngjHCj2SokBqNFFFhX2y2StGGawoxgdaSP",
  "key5": "m872qWHVU4hhAMNVg6JxJFE4j1LWMfeMfGBKCn14TULnjmnyXjReuQ7brs9AJHMHZqx5PyfL8cobeYUhMAGqy3B",
  "key6": "21mWLJbdjpmap7CpS369rUxtaJgPGsj2kCU393z3FciCdTqgwVVdBgSddDnGrHJRpsiUoujfXNoaj6k7FStwFFV9",
  "key7": "48TEa7LYC2ypygbrhPo59JwVko2EiU69ZrPGoCGdtbhzJ4vrywHqYffQiRXq5hE6Ekqouy2Ed5f9VHf5RP5xoTW6",
  "key8": "62yndyHjnWuUKrutuTa52SjsNg1f8k767fFtFH3waJi9ZAXxx2NiPXiAmpfg6oSusVwqw8v8AzoC8yXTsa3DiyWV",
  "key9": "Vse3xxrfrHxYVh7Bih28WK3Er2p4bsCHBcTbXj8CbUwimLutBEgi1WXXbeSvjgLTtiFe9Ha4EN7pzkugzGUuawL",
  "key10": "4TwtKz6TuHZWKaxpRSTU9a7cxqr2Djq6QmLMxbujk269eUY3rzXMo2iFY7AvAwVYLeRCv4R5fMHPBde84nAR6EBT",
  "key11": "2UK6czxkLxL1CrhsvL9PxqD7PCrpVeQXFma1Gx2jT7xoTxyoqyPFbpAgyxPsgqsEUkkXAmCNxQxpuRTX7oQrf55c",
  "key12": "3vMMW48YewfhdNa6fmXAWddFmUgKpR2fY5VqubTQfXNXCQfJdEjegHQTJNskPu79ojmnYP4up29Nxdit4JoSvaHV",
  "key13": "VYfdeaRKKwQMXWp3r3HjepNsD6dtpUe4J4M14sdmtmruaKRccS2i1hknJJP7zKyLtYWA65VyuivNqWBBCdcDeMN",
  "key14": "GFbuSPB6JySvpgf61sQmRj8bwo5Fx2YCy1chBiAFSyj1cc2hvksWWWQqmwZ8bFEZX9gfjSFSPQ81sKFb8rGx6JA",
  "key15": "2kxYu4ST4N5qnmsQmZ3G4w4xTnzUYnjfyt31R2xwXYhsHg8pFKS8YKin8AEmCjER5h9VGSLVXXX9ejdmfSnMYiRe",
  "key16": "3LtRwzJwmXbiCSEACW3qBXcBy8P8NEjQH2u92d4w8avxxDQeQCzGRNaMhRT2AimfQvuqbpH7wVEabsC8EaeqVcQA",
  "key17": "fkvpp8xs135WLRW9Ty6wUBk1LoDcz7tC5oSggyV2pNLNAdn7uUovQjn22X5f9RTdA89cYWsPap6ML5BNcUeQCtt",
  "key18": "5BYkYoPQdoiXDADvJRmd8KvfbjRPcjRvZbD6fRHi46yoyjJCT7xndHbULNKE5yDqNgJMMwcpnLfzYBPBZXD8bHrF",
  "key19": "3sh3AwJzRi8Jnnirdk2DQANWGp5oEp6rCZM66nePUsBC95XPymb5Hu8sdaNiYtswe1LeUetABfdr7jVnvpPp99vM",
  "key20": "5n9WB5amZzq4MiCjJ6LyFfdk45j45jshtGsLPMbPedb7qCtxEe5u6jZWW51oM7v2Tc9FyvqWXjNkEAhjXfs8xXJG",
  "key21": "2ycoS61BHUjGqUnxAmk3Hogu1SMhZn9DoQm5CVChDNchaWACaZf6rRxLe689DDGmHKpuco2XpTMTX2h2DmiGP9Fr",
  "key22": "2Z4jSBsGd7gCypxQNjE1GqodCa1ohq3F8gDY6cH4pfiL67nkbjM9w6LRiE5g5stgGk4uKsZQG7NuY4CMrF3dzszN",
  "key23": "5VMZHRcG4waiLfW6vvNt64e4LdZiYbV3U8tBzjfUvC85Go58H1KeHRrHVV6BzLkLRTZ6FVt4N7R3qUcCVezr36Js",
  "key24": "2XeFRHaw8VEcW43yYQW6BEk5SmPp49MKUbHvtnwDWjYHUvFn2Hdvy1HHdHe8XSwbHWSWpyyMiB8EjD5RT7HpfsHq",
  "key25": "5ePd6dyU2SKYiRgQsgkobB8ja3GvNiQVR4Aq1X5kjCm76kWWcmaesczYNYnKtGoKMh3Spza3BbVwtit8aAWGaM6c",
  "key26": "2JYmdLD51tmEq6CQzkY28KoUDwh98ixtmezkBNeXeznB5SrywmZFuyeiUTzCUeTyGXG4PuZDAY7GduU15t2sNR1n",
  "key27": "44Q8QaPexnw45PR8tyCUPigYnAHpGff2nUJQfwMDEEXugCBXYUmA1ju4Sgw3XQJxThUD73WE5UJ1SH8ZgL8e1z8X",
  "key28": "61Gyo4HDsd7UCUiV4BM1raUb12BBCC4uPkJBf2iRaHC3Vdequ5EVtbey57PPPQG2bs8EafADxpQCgoM3RUmhHzqe",
  "key29": "2TnvujQ5wKUihriukQhHd75k2C6YkHx7ZvfnZeP8Hot6JLkWRr5Dr4EqLgjtPmexo92rXPKHc9RvsnfHkAQP2QED",
  "key30": "5fHvCAJyjRTWJAQjY1NW12j8iYoDSP5VUYUE458JtJkEcRZrJU8M8mUKTdgokuTHSVo5LYN8tePWwRw6RghvxJKk",
  "key31": "4WA1ffpNHepxnqjX1E7baL9DhEaMATuEomy2nS61ERR2owKuuct6iLzF7LYrgS4aAeXUDZQVrTaoKkWiNPYYW55Y",
  "key32": "4Rat9jUPQSgnhrZLPuommzb7eDnQSvoGtxfCoYPGAqENsMa3UiNUHJCEgzjQx4RbP2EyoESURFKyLb7b6ZycjcNE",
  "key33": "482jdoWwsbptLtLqxWJbeAGDEBvauJzC5S8EWQCuD31sSfhewhSTAeuK8vtWhRijhdcZVNfUmTiVECDfWXCCBVFu",
  "key34": "5DvU33vEMjepKkfEYxmtKFhf2xfmwPJ9PC2szxQXxuyrYdoJfYQ627Z4TCmsiWg2f1ih1SuhxTKoif1NMHuvvxoy",
  "key35": "2B9nWtXNev822iaWLp4YJa3LqK5MSaT1zTbXtuNMCTSftfiMngwo4B2MdsMaPnURMsQmUBqqpEYkmcd6Z1RShEAo",
  "key36": "4ZKEMaYP7xUpXB7SsxBtxrgsQV7ThQa3TycPNciH3PWM1VMHmMzT228HZzu3rpmtjtc7E1vLUx35AX98BhWPJ1GM",
  "key37": "5fyzawYDUpXrv8EsGSPhEWiCfgoFs1j6mTPQrhJsGaM943pBvvRh77Hsv92Aho8WZQpoJzno1cafC6LjYS9hBy3Z",
  "key38": "cvFMQidNjs9wnU8mMTgh3dDjWisVxRAiATtCcK7KmGzDm47ed5kxq55rv6gPf3b4bcDL73NuAzBWZEZffRUxL9c",
  "key39": "1ufGry8xV57VFRLU8mdH4wq4rgt3bhMthbrncFpi68JqSfnuhwrtzUcsrrZudTBAsEaiQRoft1XTCwWxQPbhAgp",
  "key40": "2LkWZDqhSNa7RW2ryK2jvxvcfZe1UnzpL4rc4uMj24JRhoXdnZJfNgYHe91RgkpHKCghzQpw8U13pBoNh4gKszSz",
  "key41": "5Vtc6G8zLsENAMx1Q3sTsEQREierKgCk8RqjhjUGNQAeooyyvEtY7Qr8FrmnJ16HZn1xLYWyb6PRBG3acqymdXsq",
  "key42": "4FrEv5GoFMT8vTNhTc3YyT3VzhWvf3JVJZ3qSKLtjLFj2ioMaEjL9eK24m4dna5zby8WUEzziVUXYzqNSSiKfDem",
  "key43": "4ocBHkmBfJJkk4HB335gZtdHEMpruefYLao1hYCaB4RiQJYokZvMtjTkgtjYdx8PtNd5j9YEm47CfVD1b5w23xQU"
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
