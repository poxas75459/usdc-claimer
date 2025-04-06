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
    "3xdbjuGizfBgQJbrpJdo1eitK5KxoGhcj4q3wW966isa9RhsMNMM2z6mKSLPJ64DywLd8Bqp4zZfeqjNSE9gpuEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MaPnLL44oZCiS5tTyvLuxUYdQ58gz4aGrParc2i1stg4z1MPcGBwUBgxzo4Z8F17UcyQwpNqxKC6716QCoeXR8w",
  "key1": "5mDahPu4VnvasSafwBjBRAh8Hufb7HKv1UaGftTQNEYozeL4xaHmYK4sNZRc8CEZUJzujyrBWVsEL25x5Ms7wXH9",
  "key2": "4qTSPLE51Lczw1m13YNrdVoXrUhyG6yKkk16n8HcjQDtKYubUBFCkdcXTmxuCThySv146qsgPxDcJxrK8jaCKtCs",
  "key3": "2ztifhbJHC4CuDs2iS3UiTiXoR67RG2eLU2RCnv37uUzwwjWWhyBeVDisAc3YsQeNR5ir4VBZsva7Cm1L1dzmDPq",
  "key4": "5P6SFTncAZezHP41ef87Kd4UvKqmoPMJDCHcm86BJebvUsMtAT46XKqr38xrhUyYbGGQWskfC9va3wpeLry5Xvtp",
  "key5": "cMFnjyaobE2d6a67szZw4trHWERhqyk8LtDNincGUkuciTfqKjYciRe1Njujj7dvNbWs2dwCzv5Hnkng1siZd9Q",
  "key6": "rPaAvsogQBjTPY3d7feTxZxGfW1DpNEvFdgqkXN44aqMfiiC7xsDxFVgFtuijZVnTjoBa6xi4pvjVcW5YjxKgHF",
  "key7": "4dWsxDkms3ewfBwiEyRDbWb4XjFh8r8ekdqroPakHYTjBYphEzba3S5JCpmWK8yjUxLbx3Sm22em8VG3rXqhCGFj",
  "key8": "enfeF4AcSRuY2cMxxUSo4q5JoD6XeJcd6unQiDNHsYNVs1jDHz2W3nesKgtkzfXLwn6JcnDBL6eJMk9X8JXcuda",
  "key9": "ZPzQPbboJChGHzDogM8wkpge7u6Bg9aWs88c36JEUAahYAWCXhaXaxk9bddL6t89n341hq8EwAasiYBYNEnAwkg",
  "key10": "2uaLiuXDjTriKd6nxXRFvE6GQ5n2QkDdx5hFosgHS2CmwXdSHcXDwXF13XPZXPA9kcGJRede5jqMWwkQBjq4hgFa",
  "key11": "a6LVhdQv6T3btueSKpr893c5EZbXdu8ZNY51hvhGH9deEntwL6SMuxAPFRYGV2MKRJVyWDBQKRzWCvNANFemjom",
  "key12": "6348JS6ZFgUz13B5wRXSbzYHfdcmjdJQG6LEZjXghmyFr3a29pXHumW8fxdit5DGiKdz6anYLShaTeWdVMLtiWNT",
  "key13": "4XXmmcnddHN5syiSWr6PH3hcGUKuNdGB9JoqtmuHkSiGL3jAvzddbwdXi4MnozXQpLrsN6pQjuJnprZiCrR45EZL",
  "key14": "31iYyDXqiGe84JDeBvjFAKHtM3GqtBoAxt7DcLhYGhyBCzwawFAkhPnzboh3ctfdbok7MaJiyZo45X2cgQYXFC6t",
  "key15": "56bksjsuqrv3BY28rh8ajmEmcYNss6GkFprSV144juSZ8VYDeotuo2LUJbYU3MzB5jcuRwe19oLuDknhT8MheALH",
  "key16": "3yGtMdMfpTEvQ6NmNnUTeGDVB89vKygpDBv2AShb5Uwo61js3ZZq2zW7fUnG7PqwkAvVRov4xp5nN5MSuXH7ad3Y",
  "key17": "GqPK6p8kkswqkMmq4jmEKqkeoMYUseGrFqRVjQrj7H1HMmsefWFXRgf2rmjV5r7enSnNnvA7uD6Xv1W1BCyT8FS",
  "key18": "4FWRu6HDd5TfKSMrmNTgtKy7njmuTwarinYPGHjq8CLHw9d6xH8qXYt4EXdsigLLh3xeNfTmTBmZpxY3N3oH9Kjn",
  "key19": "5vfyu2Kpp2kSgaK1WCknUfyTmPx3vR51ikamPYYjqp3ekVkCMP9BM7jAnKhxUi3V7kfynVqqNaqdgySvhtchWkuH",
  "key20": "33g5VDPQxeABFnHTyGEhdRfx2dxv6xbiakNpoMiadsLLX8fwWKdusV8Ns6Bf3iQDzeHRbGqK9kXDbjne4AMRu5H",
  "key21": "3xT264iJAEigHrjzETvS2gNcYa7cMxYJuVTSiNpjYweYaeMXTdr5MN3QRWQ9R4ib95ApXGQL2Mgv2mDbFMKnhTmy",
  "key22": "MnM64ZcwZP1RGjzTh9GL9eBXUA6cwUNUomSQhBnKR8AJkSUUMNM62eoE9ybyNzc9Ku5K3huUYsKc57v8zD3ueCG",
  "key23": "2HGtiqMefHbMaJX1RCcwL1FnttWC4wbQYWj9McnfkBAme4FFp2HD6j2yz9urjzpDrmVhE17EHsA19YVRmxgKcRBb",
  "key24": "5k7SC16wJVampiCv6fhLBvM6YTmWg8WqSEkMtKwNKHoGUT7PR9Wn3rv8yj8DtCa1iNhQB5UTCi5EceCamLhqrYP8",
  "key25": "62tVSMt7h6cQcntF1n3gKq78W1kqtJPzuJZ5vHxCcBq6RGzJcwJW9o9dewYUiu9u8m9nfGyQYJynsjN4Bikt4JxA",
  "key26": "29TrYmZ9QwBvPKFQLNVpHY65VpCUhdYDpnLBL3io3tuQCVAUGNW1MAiyQyzZ9cM4wSpRW1WwXTESxFZP51LsvYw4",
  "key27": "3iQ4BXNxtbW9xgthEHksUrzC6hcr8rnRagoA5qWJ3VZ8ruNCD8uWJU8Li7ASUETwXiM51b9ijmQQ8L18Y5sGXxTy",
  "key28": "5NYzHp651n9FzbFYKwBLSi2n1TEETSt99jGAn87pndPhJSAaXnPF6CeAkCiTfaTrD5BeiBcgTgymfhNHnvS8SrNB",
  "key29": "4de2tizZAaSD6MkfKKfnHju2zUSATcXCmBu9ZyjkarP217oEfoum5g86HkeRp9vhS9oAFrcurqn5vnqEf6BzUvwQ",
  "key30": "GJCG5A4BJQBkqX2CqoD4oL6U8sAXQbj9BzuR978r7LP1ynyZtNKPsa1DcVmxK8ouQ8Nfj76CJv8hbsJCckkTfkU",
  "key31": "NbK9f6FRnfk2PngPssweoC2C3jnKiLBnzp3eKYycsQvjg4rKdRrax6eBpeuwxJwyeXYAFUKQrBKiqEXki7uFVt3",
  "key32": "PwMKL1cwzE7DS8Qwyqcgyh4NaftSzYoNNiaEryMfmLnaPXwUBgnR7vBsb1W7NhhKi1kyPpSfujGPGg2HiXSM7HV",
  "key33": "Q3e129a9tbKTCD58oK95dASW1q1m7DY3gFpSrUQTSMGg6vYhMAYPTQur8bcpNtPf9W5si7uqxf95BwY1hkDPVcv",
  "key34": "5RbAkM9PJdnidLdLaU1LLnbkoFpxGYgbf2urfQ3jygGvDqyn6DpVPVzLtofA5H5gdsdxZgNhHQc4r1P4bqxXhqaA"
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
