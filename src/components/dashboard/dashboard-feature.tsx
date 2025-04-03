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
    "5YiVCioNz3xQsDUzsQ16tnH8wbQjLbU9PX37nT4ZVdQtjNsTcmtrdZAhfH1Czk2hgTUzSnDiNVwNZUizZjoyQzWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFpRpVy4CKw5UHptsuQEKCD5WCKzq8wt34G1cASwghxLf29pqkpRJhE38CDwJ8fo6FkGLcWmGhmaNbiv7qZicdA",
  "key1": "4EKzxRqNPv3gNtp4oa5nGgQabQYFKH7QM7T2BgrjVf3heuTGDbwS5dsMxbxUviyZ5mYuhkPSMyrgu4229CdBdLEr",
  "key2": "38B9jKNARMXNDkssfCyD4ubfCRn9TGyacofHcvVhnoMbw1TVUyoPnS34zH1EAxewEGGG8c1S1jAEfVkUJYxKqjU4",
  "key3": "2KUNU8QUCCfiVjJXMxT566imoAUeUxMun8DV9JQRH1MfbzMEM7AjmqAN43fmeK1tcYMi7jQH3zRBvT1P3KVKeUG",
  "key4": "3fNGLnoKYMs4k31g4oD2PzxoajNz6Vb2b6MshCxwmMdi1fjMf3GoQZtqgCPcF8oCtwSHG7C9r8oxdHpXfERuNUDp",
  "key5": "32fu1HGDPebrkjdDDpoHMchJQo8svfhG7J5UQWjL8YLZkyWTYbWKH63HQaRBdJmamxJ79MgVPtMJFfNRfBETNVPk",
  "key6": "2KWtp4uw1YzC6BGKLg4e6LbBSANhi9R7qKEeprARdchXTjW5RkNuHmkamoksAECRmhsVq8fbWpqMU7q8p4pReBzn",
  "key7": "52CqHe4G2c9UdNZZXoUnunihCkWoQWEsAnLuKat4vcTYYt5PVqdRjPmDbDQyajM5H82Vxs1nZs5Df2MdrvEMV8xz",
  "key8": "d4fshtzkWUExrPMNFSBTCfDCi9gUf9XDXgao2JHyEMWxA6fzLKDvCoGfnAcu2youvJMT1PJHuYtarja4mYYPswL",
  "key9": "5CkPZAFsxvxpvVoZ2XiBPqv5LriUexnEqrDqdB47gEMj1Q85YoaCuunrMHsUcZ5m6CdHpXM9QJyu6K7i3MWPzmfE",
  "key10": "5sQez5sFzmCkkobXjpZBzWzgBo83L8PiEkPioPGYApKiYF8yPnyswyHRLmzxrReqywJfZh9Bexfvk8r1T2kDkx53",
  "key11": "Ni44b9Ua6xSu2jqvvtyusuE7PLg1XxBi2Dmhjg1xndrUoQbCYths38z2v8eMbvHE12TndAotf1hxi1omdK96kiC",
  "key12": "41qYaZNZYYczvnM6vKmg6SHVW8NQ781QorxduAVTta4RhQDwVhrwGUX3KosmGyGrqVG2uadHV28YaudaTdimV5ae",
  "key13": "2XMSU1jTjr6rFNdDuUVid81gNgvU9e5s8EnPe5PK6UdMQwxxbSX7t725cbQMJnk14QoZWMM7TWRS7Dfm5JuEhXxj",
  "key14": "4qmCyLMBDmEoSH1ANtXoGRyPRtd2EtirxSzArG9X6H3d5fkfZUQqfff8PKUuUqG3AykdgZCKKNKk7JA4KKhbM3zx",
  "key15": "49NXkKW3CvKTFdz2CjwHKpFpxemRatyd4C6gjx8ifS1Ac3odcwqZiZ5Yt1KX6pkx3iLvWATWLYYH5hGRLXsRwQTe",
  "key16": "2kagFFE1ghiKwHwgZU5bfUoba4jYGX2eUyFC3jtqg1SB7XM1Ebsq6TVjyBRvSYhUif7J4zq6hBHDXxoFYTmX2nUn",
  "key17": "A2mzDk3vEkivRvFSgrHj3uXhufnRVUnurmJDQwJqmuNBm3zznvMyZCoapctY7ipqByHC6nzVpvcc3kdFZ1UFTmQ",
  "key18": "44wfbdiUPKBw3rN9hUaDkmoYfU4oRVghBX4wfe2QRuPZBem8Vxm1VBHdtRPBPB1mu2tM8fXcyGaMjy3beYM2eNvU",
  "key19": "4xFmJbMpoDavwK1DAzRsQeJViWHzVBpHLo2UQXH8mKzvtR4NRUwPZT8WnhudWQUGEGN3vS9AmmqD1h78pd3L2nvq",
  "key20": "3Zii1EPaKq2QNCFXcFEuyrGC2QjrVUJHia35SvjjtepuaX1M8AaDa2MC2Cg7vcrDRAMz68zdNt2k6yneXL9URt7K",
  "key21": "S56u9cLLk2JvWE128t63RPwvGxx6LYteXwVNUvfEuXUKuruPe9Qa8SEFr34jXxkx59WZbRfXefGuEkMj94fxAkf",
  "key22": "3cpy9QHecAYDuY75NtDmb1u4bvQKXFrPkCth9TkzcDLKmvqqTKqUDid7DT8oTm2xLjnKGLBuydD3HdmGiNLxrz3K",
  "key23": "2B4h1n56J4CRzVoKagxhYM6gxhUQsrft8wK8TmviSjSEVzFwymdoksEHLj6DvCTYqeVM24pjrLxpM4hLTw9kiTu2",
  "key24": "3gQNDSX8xvDNGvpLJZXiamJVCXRVLvtcVCr9WfuheW745FMcEpHYtZPXz1rV2AqdKHDxsgP82Ku3LvDxKELMQmUH",
  "key25": "4VmScAjc1Zej2NZXP2n5RFBGWa8VrdS36z31Cnn7busJa9nY2Pf9AJPFuvid4XL6U8q6N2hjqFS52TgYoV5Xus2X",
  "key26": "MBaFRjFAUUQbfJ54gG5UiCTh51byYwNaDpKHA8ppxdo8ragp8T5RavHSh9f1Ck1hEzb7Yc3VtctCF1RLp8dBwhG",
  "key27": "AHHPP9oTSWQwUYY3DVpSg5ip5Au95g1TBcbdcmwzX9GaTciQqRuzNXVQNGAB3rMazf6QUL8S9VjtuErTx4ZnYYt",
  "key28": "wkVXu4o5D4ibWCuXWSVzJotgiStEwvacsjV5YAF8ped8YPFDcWmtjd7h7ZzRNV7wJ142XV5uTxVaGD5FoERSwH7",
  "key29": "4Qj7oSvC5kQ2uGeYUmXq5HBSNPRDcJydsKhPtHSYJMSsi8zvd6mDXSiivPNZZQpv4G9xyM1N4Jk5RwrhzbRnrrWq",
  "key30": "3y7u7r94mrZLoBoYmWxtpfeJLGtbjnvJVYp8B5V1cQsP8ajrgSD2PaZt8UVYeJt1bXeDHoHdBuEZxxmsSHeFJ1cL",
  "key31": "2WX8EgkybDvaJ5ndUatVQiUP3QFdXTuwerFqPGviNyz5bDLczRJfxhAYpiQJvYRgUPGDUF7BoKVPChhw6UwwDmfN",
  "key32": "5USppSvEoptBwAK9sHwvngGuFNSVcaR16UHoGH87hDzgADzgR1RvLwpgSQRxXqWwfyx5EhZmZx2qj177vvPKYMoc",
  "key33": "5Y6iMUayqbxSdiaGQ4Buf6EjHCNyp4DAG5FpjZ4csdjVaJSDMSksBN6HW4opbvZBwsC7GJU5m7V9qTvM74yAMKc2",
  "key34": "2D8NWFtoMDvNmVjvtBMv3yWdf9oUD2EDnYqLL1vvL3teZp5tvmnWTEZ64jKW1asHEtE5Mqi83FHbTJ4Ns587tjMk",
  "key35": "3ShbcDtmvpAaSsh48sDSfmu6212QJ1Ldwyo3xeBRmAoPoXR2fJVDTrV68Np7gzBULHrHmwSTX9UBNr78TUW4aZhX"
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
